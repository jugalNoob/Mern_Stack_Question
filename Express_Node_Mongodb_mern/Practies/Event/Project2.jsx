import EventEmitter from 'node:events'
const userEvents = new EventEmitter();

// Listeners
userEvents.on('register', (name) => console.log(`📩 Send email to ${name}`));
userEvents.on('register', (name) => console.log(`💾 Save ${name} to DB`));
userEvents.on('register', (name) => console.log(`📢 Notify admin about ${name}`));

// Action
function registerUser(name) {
  console.log(`${name} registered.`);
  userEvents.emit('register', name);
}

registerUser('Jugal');
