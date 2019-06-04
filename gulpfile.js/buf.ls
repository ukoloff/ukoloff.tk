# Buffer.from polyfill

module.exports = Buffer.from || ->
  new Buffer it
