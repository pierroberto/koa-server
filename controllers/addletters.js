const insertletter = require('../models/insertdata')
module.exports = function add (arr) {

  return new Promise ((resolved, rejected) => {
    let res = arr.filter(letter => {
      return typeof letter === 'string'
    });
    resolved(res);
  })

}
