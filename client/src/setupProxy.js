const proxy = require('http-proxy-middleware')
// using proxy so cookies can be passed to different port

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
}