const request = require('request');

module.exports = (x, done) => {
  request(x, (err, _, body)=> {
    if (err) done('Something went wrong!');
    else {
      done(body);
    }
  })
}
