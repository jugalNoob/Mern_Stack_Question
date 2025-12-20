createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello Jugal')
}).listen(9000, () => {
  console.log('Server running on 9000')
})


const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'hi i am jugal' }));

});


///////////// -------------- with url Important -------------->>

createServer((req, res) => {

  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello Jugal')
    return   // ✅ IMPORTANT
  }

  
   if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'About Page' }));
  }

  // Default route (404)
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Route not found' }))




}).listen(9000, () => {
  console.log('Server running on 9000')
})