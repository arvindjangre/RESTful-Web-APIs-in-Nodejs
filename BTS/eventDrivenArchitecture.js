let events = require('events');

// creates an event
let eventEmitter = new events.EventEmitter();


// event handler or listener
eventEmitter.on('connection', () => {
  console.log('Connection successful.');
})


//fire a connection event
eventEmitter.emit('connection');
eventEmitter.emit('connections');