const fs = require('fs');
const { builtinModules } = require('module');

module.exports = (x) => {
  fs.readFile(x, 'utf8', (err, data)=>{
    if (err) throw err;
    else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ')
    }
  })
}
