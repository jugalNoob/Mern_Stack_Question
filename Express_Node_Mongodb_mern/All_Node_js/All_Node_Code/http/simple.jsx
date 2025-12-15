  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(8000);


const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'hi i am jugal' }));

});

server.listen(3000, () => console.log('Server running on port 3000'));