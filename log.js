const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('request', incomingMessage => console.log(incomingMessage.url));

exports.emitter = emitter;