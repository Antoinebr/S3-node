const Upload = require('./upload/upload.server.controller.js')
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
module.exports = (app) => {
// API Server Endpoints
    app.get('/', Upload.displayForm)
    app.post('/upload', multipartMiddleware, Upload.upload)
}