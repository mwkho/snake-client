let net = require('net');

const connect = () => {
  const conn = net.createConnection({
    port:50541,
    host: 'localhost'
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