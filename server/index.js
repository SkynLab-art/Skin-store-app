const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 5000;

// Collect default metrics (CPU, memory, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// Custom metric — count HTTP requests
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

app.use(express.json());

// Middleware to count every request
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
});

// Main route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SkynLab API 🎨' });
});

// Metrics route — Prometheus scrapes this
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`SkynLab server running on port ${PORT}`);
  console.log(`Metrics available at http://localhost:${PORT}/metrics`);
});