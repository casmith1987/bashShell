const fs = require('fs');

module.exports = (x, done) => {
  fs.readFile(x, 'utf8', (err, data)=>{
    if (err) done('Something went wrong!');
    else {
      done(data);
    }
  })
}
