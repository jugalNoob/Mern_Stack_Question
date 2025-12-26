process.env.UV_THREADPOOL_SIZE = 2;

🧮 Example: Thread Pool in Action
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 2;

console.time('1');
console.time('2');
console.time('3');
console.time('4');

for (let i = 1; i <= 4; i++) {
  crypto.pbkdf2('pass', 'salt', 100000, 512, 'sha512', () => {
    console.timeEnd(String(i));
  });
}


1:::The Offload: When you call an "Async" function 
(like fs.readFile or crypto.pbkdf2), Node doesn't wait. It sends that task to Libuv.

2::Libuv & Thread Pool: * The Event Loop manages the flow,
 but it doesn't like heavy lifting.

3::For expensive tasks (File System, DNS, Crypto), Libuv uses its Thread
 Pool (usually 4 threads by default) to do the work in the background.