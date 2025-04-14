const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes on your proxy server
app.use(cors());

// URL of your production API
const API_SERVICE_URL = 'https://example.com';

// Optional: Log incoming requests for debugging
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
  });
  

// Proxy endpoint: requests to /api will be forwarded to the production API
app.use('/proxy', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // remove /api prefix when forwarding the request
    },
}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}/proxy`);
});
