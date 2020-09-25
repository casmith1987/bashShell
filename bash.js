const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl')

process.stdout.write('prompt > ');
process.stdin.on('data', (data)=> {
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === 'pwd') pwd(done);
  else if (cmd[0] === 'ls') ls(done);
  else if (cmd[0] === 'cat') cat(cmd[1], done);
  else if (cmd[0] === 'curl') curl(cmd[1], done);
  else process.stdout.write('Not a recognized command.\n\nprompt > ')
})

const done = (out) => {
  process.stdout.write(out)
  process.stdout.write('\n\nprompt > ')
};
