const express = require("express");
const helmet = require('helmet')
const cors = require('cors')
const boogerRouter = require('../boogers/boogers-router')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors());


server.use('/api/boogers', boogerRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


module.exports = server;
