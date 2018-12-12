if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
  // console.log("in production")
} else {
  module.exports = require('./dev')
  // console.log("in development")
}