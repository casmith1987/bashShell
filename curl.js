const request = require('request');

module.exports = (x) => {
  request(x, (err, _, body)=> {
    if (err) throw err;
    else {
      process.stdout.write(body);
      process.stdout.write('\n\nprompt > ')
    }
  })
}
