const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('request', data => console.log(data.headers.host));

exports.emitter = emitter;