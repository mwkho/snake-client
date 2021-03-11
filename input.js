let {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY} = require('./constants')

let connection;
const setupInput = function(conn){
  
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input, conn);
  });
  return stdin;

}

const handleUserInput = function(key,conn){
  if (key === '\u0003') {
    process.exit();
  }

  if (key === MOVE_UP_KEY){
    conn.write("Move: up");
  }

  if (key === MOVE_LEFT_KEY){
    conn.write('Move: left');
  }

  if (key === MOVE_DOWN_KEY){
    conn.write('Move: down');
  }

  if (key === MOVE_RIGHT_KEY){
    conn.write('Move: right');
  }

  if (key === 'q'){
    conn.write('Say: FOOD!')
  }
}

module.exports = {setupInput};