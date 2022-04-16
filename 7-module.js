//Require the file in app.js file
const { john, peter } = require('./3-names');
const sayHi = require('./4-utils');
const data = require('./5-alt-flavour');
console.log(data);
require('./6-mind-grened');
// console.log(names);
sayHi('Debashish');
sayHi(john);
sayHi(peter);