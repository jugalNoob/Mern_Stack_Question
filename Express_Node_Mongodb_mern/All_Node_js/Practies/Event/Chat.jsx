🔥 Real Example

Imagine a chat app:

chatEvents.on('message', (msg) => console.log(`New message: ${msg}`));

// When a user sends messages
chatEvents.emit('message', 'Hi!');
chatEvents.emit('message', 'How are you?');