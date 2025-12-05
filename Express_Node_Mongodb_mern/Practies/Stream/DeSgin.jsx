No transform, no write—just Readable Stream → Network → Server receives chunks.



✅ ASCII Diagram: Readable Stream Sending Chunks (Client → Server)




                           CLIENT SIDE
                   (Readable Stream: fs.createReadStream)

          ┌──────────────────────────────────────────┐
          │   File: bigdata.txt                      │
          │   Readable Stream                        │
          │                                          │
          │   Emits chunks like:                     │
          │   ┌──────────┐   ┌──────────┐            │
          │   │ chunk #1 │ → │ chunk #2 │ → ...       │
          │   └──────────┘   └──────────┘            │
          │                                          │
          └──────────────────────────────────────────┘
                              │
                              │  (HTTP Request Body)
                              ▼

──────────────────────────────────────────────────────────────────────

                            SERVER SIDE
                     Incoming Request Stream (req)

          ┌──────────────────────────────────────────┐
          │        HTTP Server                      │
          │                                          │
          │  Receives data chunk-by-chunk:           │
          │                                          │
          │   req.on('data', (chunk) => {            │
          │        handle(chunk)                     │
          │   })                                     │
          │                                          │
          │   req.on('end', () => { done() })        │
          │                                          │
          └──────────────────────────────────────────┘










✅ ASCII Diagram: Node.js Stream Flow (Client ↔ Server)

              CLIENT SIDE                               SERVER SIDE
    --------------------------------------------------------------------------------

     Readable Stream                     Incoming Readable Stream (req)
  (File, Buffer, Network)                      │
        │                                       │
        │ 1. Upload (pipe data chunks)          ▼
        │────────────────────────────────────► [req_stream]
                                                │
                                                │ 2. Transform Stream
                                                ▼
                                          [ zlib.createGzip() ]
                                                │
                                                │ 3. Write Stream (save to disk)
                                                ▼
                                       [fs.createWriteStream("file.gz")]
                                                │
                                                │
                                                ▼
                                          (Server stores file)


    --------------------------------------------------------------------------------
           SERVER → CLIENT RESPONSE STREAM
    --------------------------------------------------------------------------------

                                                ▲
                                                │ 4. Server creates Readable Stream
                                                │    (example: reading logs, file, data)
                                                │
                                      [fs.createReadStream("file.gz")]
                                                │
                                                │ 5. Send back to client as chunks
                                                │────────────────────────────────────►
                                                ▼
                                   Client Writable Stream (response body)
                                   (Browser, Postman, axios, fetch API)





                                   📌 Explanation (Simple)
1️⃣ Client → Server (Upload stream)

Client reads a file:

fs.createReadStream("file.txt")


It pipes data to server request:

readStream.pipe(req)

2️⃣ Server receives stream (req)

Server receives the upload as req (Readable Stream).

3️⃣ Server processes (Transform Stream)

Example: gzip the file.

req.pipe(zlib.createGzip())

4️⃣ Server writes final output (Writable Stream)
.pipe(fs.createWriteStream("file.gz"))

5️⃣ Server → Client stream response

Server streams file back to client:

fs.createReadStream("file.gz").pipe(res)


Client receives chunks, not full data at once.