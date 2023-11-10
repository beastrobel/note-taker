const express = require('express');
const router = express.Router();
const fs = require('fs');

//Universally Unique ID
const { v4: uuidv4 } = require('uuid');

//Followed tutorial for this section and adapted to project https://www.youtube.com/watch?v=-UiqzvUe360
//GET route for retrieving notes
router.get('/notes', (req, res) => {
  const noteDb = JSON.parse(fs.readFileSync('db/db.json'));
  res.json(noteDb);
});

//POST route for notes
router.post('/notes', (req, res) => {

  const noteDb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  noteDb.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(noteDb));
  res.json(noteDb);
});

module.exports = router;