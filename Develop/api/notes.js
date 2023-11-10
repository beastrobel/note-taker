//I referenced the Mini-Project for the code in this route, and adapted it
const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils.js');

//Universally Unique ID
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving notes
router.get('/notes', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

//POST route for notes
router.post('/notes', (req, res) => {
  //Destructures note post elements
  const { noteTitle, noteText } = req.body;
  
  //Checks if title and text are present in the note post
  if (noteTitle && noteText) {
    const newNote = {
      noteTitle,
      noteText,
      note_id: uuidv4(),
    };

  //Adds new note to db file
  readAndAppend(newNote, './db/db.json');

  const response = {
    status: 'success',
    body: newNote,
  };

  res.json(response);
  } else {
  res.json('Error in posting note');
  }
});


module.exports = router;