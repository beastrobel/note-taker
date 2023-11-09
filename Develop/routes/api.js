const api = require('express').Router();

api.get('/', (req, res) => {
    res.send(`it worked`)
  });

module.exports = api;