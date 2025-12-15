✅ 1. emit (send to only one client or event target)
Simple Meaning:

Send message directly to one client or to everyone (depending on where you call it).

Example:
socket.emit("welcome", "Hello User"); 


This sends message only to the connected client.

✅ 2. io.emit (send to EVERYONE)
Simple Meaning:

Send to all clients connected to the server.

Example:
io.emit("news", "Hello everyone!");

✅ 3. broadcast (send to everyone EXCEPT the sender)
Simple Meaning:

Sender will NOT receive the message.
Others will receive it.

Example:
socket.broadcast.emit("message", "User joined");


Sender does not get this message.

✅ 4. Rooms (special groups)
Simple Meaning:

Rooms = groups of clients.
You can send message only to that group.

Create or join a room:
socket.join("room1");


Send message to a room:

io.to("room1").emit("message", "Hello room members");


Send to all rooms except sender:

socket.to("room1").emit("message", "A new user joined room1");

🎯 Super Simple Summary


| Keyword                  | Meaning                             |
| ------------------------ | ----------------------------------- |
| `socket.emit`            | Send to **self only**               |
| `io.emit`                | Send to **everyone**                |
| `socket.broadcast.emit`  | Send to **everyone except sender**  |
| `socket.join("room")`    | Add user to a room                  |
| `io.to("room").emit`     | Send message **to a specific room** |
| `socket.to("room").emit` | Send to room **except sender**      |


