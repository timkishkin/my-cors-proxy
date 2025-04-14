# My CORS Proxy

This project is a simple CORS proxy server built with Express.js. It forwards requests to a specified API while enabling Cross-Origin Resource Sharing (CORS) for all routes.

## Installation

```sh
npm install
```

## Usage

1. Start the server:
```sh
npm run serve
```

2. The proxy server will be running at `http://localhost:3000/proxy`. Requests to `/proxy` will be forwarded to the production API (hardcoded)

## Configuration

- The target API URL can be set in the `server.js` file:
```javascript
const API_SERVICE_URL = 'https://myurl.com';
```

- You can change the port by modifying the `PORT` variable in the `server.js` file:
```javascript
const PORT = 3000;
```