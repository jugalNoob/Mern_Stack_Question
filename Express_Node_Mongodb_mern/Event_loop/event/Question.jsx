
1:::The Offload: When you call an "Async" function 
(like fs.readFile or crypto.pbkdf2), Node doesn't wait. It sends that task to Libuv.

2::Libuv & Thread Pool: * The Event Loop manages the flow,
 but it doesn't like heavy lifting.

3::For expensive tasks (File System, DNS, Crypto), Libuv uses its Thread
 Pool (usually 4 threads by default) to do the work in the background.