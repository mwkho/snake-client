let connect = require('./client').connect

const setupInput = function(){

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  })
  return stdin;

}

const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
}

setupInput();
console.log('connecting');
connect();