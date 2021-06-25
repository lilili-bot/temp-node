// Modules -Encapsulated Code(only share minimum)
// CommonJS, every file is module(by default)

const names = require('./4-names.js');

//console.log(names)
const sayHi = require('./5-utils.js')
//console.log(sayHi)

const data = require('./6-alternative.js')
//console.log(data)
/* sayHi('susan')
sayHi(names.peter)
sayHi(names.john) */

require(`./7-mind-grenade.js`)