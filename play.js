let connect = require('./client').connect
let input = require('./input').setupInput


setupInput();
console.log('connecting');
connect();