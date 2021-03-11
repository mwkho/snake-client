
const {PORT, IP} = require('./constants');
const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    port: PORT,
    host: IP
  });

conn.setEncoding('utf8');

conn.on('data', (message) =>{
  console.log(message);
});

conn.on('connect', message => {
  console.log('Now connected to the game server.');
  conn.write("Name: MHW");
});

return conn;
}

module.exports = {connect};