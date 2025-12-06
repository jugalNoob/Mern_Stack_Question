🧠 Interview Tip

Question: How would you check if your Node.js process is using too much memory compared to system memory?

Answer:
You can compare:

const used = process.memoryUsage().heapUsed;
const total = os.totalmem();

if (used / total > 0.8) {
  console.warn("⚠️ High memory usage detected!");
}


This warns when your app uses more than 80% of available system memory.




// 🧠 Node.js Memory Monitor Project
const os = require("os");

// Function to convert bytes → MB
const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

function showMemoryReport() {
  console.log("🧩 ------------------------------");
  console.log("📊 Node.js Process Memory Usage:");
  const processMem = process.memoryUsage();
  console.log(`Heap Used: ${toMB(processMem.heapUsed)} MB`);
  console.log(`Heap Total: ${toMB(processMem.heapTotal)} MB`);
  console.log(`RSS (Resident Set Size): ${toMB(processMem.rss)} MB`);

  console.log("\n💻 System (OS) Memory Info:");
  console.log(`Total Memory: ${toMB(os.totalmem())} MB`);
  console.log(`Free Memory: ${toMB(os.freemem())} MB`);

  // % memory used by your app vs system total
  const percentUsed = ((processMem.heapUsed / os.totalmem()) * 100).toFixed(4);
  console.log(`\n📈 App Memory Usage vs System: ${percentUsed}%`);

  console.log("🧩 ------------------------------\n");
}

// Call every 3 seconds
setInterval(showMemoryReport, 3000);
