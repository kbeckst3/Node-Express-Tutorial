const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data recived user ${name} with age: ${age}`);

})

customEmitter.on('response', () => {
    console.log('this is the second event');

})
customEmitter.emit('response', 'keller', 25);