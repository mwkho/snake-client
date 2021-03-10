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

return conn;
}

console.log('connecting');
connect()