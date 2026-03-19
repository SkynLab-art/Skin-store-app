const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SkynLab API 🎨' });
});

app.listen(PORT, () => {
  console.log(`SkynLab server running on port ${PORT}`);
});