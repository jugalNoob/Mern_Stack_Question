import { createServer } from 'node:http';

const server = createServer((req, res) => {
  // Simple routing
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Welcome to Home Page' }));
  }

  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'About Page' }));
  }

  // Default route (404)
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(3000, () => console.log('Server running on port 3000'));
