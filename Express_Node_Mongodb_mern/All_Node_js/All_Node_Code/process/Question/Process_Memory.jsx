9️⃣ Interview Tips

process.memoryUsage() → shows real-time JS + native memory

Buffers and ArrayBuffers → external memory

Always clean timers / intervals to avoid leaks

Use heap snapshots (--inspect) to debug memory



process

🔹 8️⃣ Example: Full Memory & Info Monitor
setInterval(() => {
  console.log('Memory Usage:', process.memoryUsage())
  console.log('CPU:', process.cpuUsage())
  console.log('PID:', process.pid)
  console.log('Uptime:', process.uptime())
}, 2000)



7️⃣ Resource Limits & Performance

process.setMaxListeners() → limit event listeners

process.hrtime() → high-resolution timer for performance

process.cpuUsage() → CPU usage of process




🔹 2️⃣ Memory-Related Methods
2.1 process.memoryUsage()

Returns real-time memory stats:

console.log(process.memoryUsage())


Example output:

{
  rss: 21523456,        // Resident Set Size (total memory used by process)
  heapTotal: 6579200,   // Total allocated heap
  heapUsed: 3192000,    // Actual used heap
  external: 523456,     // Buffers and C++ objects outside V8 heap
  arrayBuffers: 102400  // Memory used by ArrayBuffers (Node 12+)
}



| Key            | Meaning                                                           |
| -------------- | ----------------------------------------------------------------- |
| `rss`          | Total memory allocated for process (heap + stack + code + native) |
| `heapTotal`    | Total heap allocated                                              |
| `heapUsed`     | Heap actually in use                                              |
| `external`     | Memory used by Buffers & C++ objects                              |
| `arrayBuffers` | Memory used by `ArrayBuffer` instances                            |


Explanation:

2.2 process.uptime()
console.log(process.uptime())


Returns time (seconds) since process started