Perfect! ✅ Let’s dive into callback hell and how to fix it. I’ll explain with easy examples.

🔥 Callback Hell Example
1️⃣ Problem: Nested Callbacks
function downloadFile(file, callback) {
  setTimeout(() => {
    console.log(`Downloaded ${file}`);
    callback(file);
  }, 1000);
}

downloadFile("file1", function(file1) {
  downloadFile("file2", function(file2) {
    downloadFile("file3", function(file3) {
      console.log("All files downloaded!");
    });
  });
});


Output:

Downloaded file1
Downloaded file2
Downloaded file3
All files downloaded!

❌ Why This Is Bad

Deep nesting → hard to read

Difficult to maintain

Error handling is messy

Hard to reuse functions

2️⃣ Fix with Promises
function downloadFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Downloaded ${file}`);
      resolve(file);
    }, 1000);
  });
}

// Chaining Promises
downloadFile("file1")
  .then(() => downloadFile("file2"))
  .then(() => downloadFile("file3"))
  .then(() => console.log("All files downloaded!"));


Output: Same as before ✅

No deep nesting

Readable and maintainable

3️⃣ Fix with Async/Await (Best Modern Way)
async function downloadAllFiles() {
  await downloadFile("file1");
  await downloadFile("file2");
  await downloadFile("file3");
  console.log("All files downloaded!");
}

downloadAllFiles();


Benefits:

Looks like synchronous code

Cleaner than Promises

Handles errors easily with try/catch