mport { createServer } from 'node:http'

const server = createServer((req, res) => {

  // =========================
  // BASIC ROUTING
  // =========================
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    return res.end('Home Page')
  }

  if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    return res.end('Hello Jugal')
  }

  // =========================
  // POST REQUEST (BODY READ)
  // =========================
  if (req.method === 'POST' && req.url === '/data') {
    let body = ''

    // req is a STREAM
    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body)

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
          message: 'Data received',
          data: parsed
        }))
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Invalid JSON' }))
      }
    })
    return
  }

  // =========================
  // 404 - DEFAULT ROUTE
  // =========================
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Route not found' }))

})

server.listen(9000, () => {
  console.log('🚀 Server running on http://localhost:9000')
})