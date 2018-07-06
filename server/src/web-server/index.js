const http= require('http')
const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('hello express');
});
const server=http.createServer(app);
module.exports = server
