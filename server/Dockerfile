# Step 1 — Start with Node.js 24 as base
FROM node:24-alpine

# Step 2 — Set the working directory inside container
WORKDIR /app

# Step 3 — Copy package files first
COPY package*.json ./

# Step 4 — Install dependencies
RUN npm install

# Step 5 — Copy rest of the code
COPY . .

# Step 6 — Tell Docker this app uses port 5000
EXPOSE 5000

# Step 7 — Start the server
CMD ["node", "index.js"]