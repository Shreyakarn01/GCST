// server.js

import express from 'express';
import httpProxy from 'http-proxy';


const app = express();
const proxy = httpProxy.createProxyServer();

// Define the port for the proxy server
const PORT = 3000;

// Proxy middleware
app.use('/', (req, res) => {
    // Proxy the request to the target URL
    proxy.web(req, res, { target: 'http://gcst-api.onrender.com' });
});

// Start the proxy server
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
