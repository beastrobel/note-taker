const notes = require('express').Router();

notes.get('/', (req, res) => {
    res.send(`it worked`)
  });

module.exports = notes;