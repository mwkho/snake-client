const setupInput = function(){

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  });
  return stdin;

}

const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w'){
    console.log("Move: up");
  }

  if (key === 'a'){
    console.log('Move: left');
  }

  if (key === 's'){
    console.log('Move: down');
  }

  if (key === 'd'){
    console.log('Move: right');
  }
}

module.exports = {setupInput};