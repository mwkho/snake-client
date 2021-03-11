const connect = require('./client').connect
const setupInput = require('./input').setupInput

console.log('connecting');
let conn = connect();
setupInput(conn);