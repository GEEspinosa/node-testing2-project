const express = require('express')
const server = express()

const hobbitsRouter = require('./hobbits/hobbits-router.js')

server.use(express.json())

server.use('/api/hobbits', hobbitsRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server