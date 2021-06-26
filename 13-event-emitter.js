const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response',(name, id)=>{console.log(`data is recieved ${name}`)})
customEmitter.on('response',() => {
 console.log('it has to be first on, then emit')})
customEmitter.on('response',() => {
 console.log('there are can be as many response as we need')})





customEmitter.emit('response','john',34)