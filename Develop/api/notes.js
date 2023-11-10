//I referenced the Mini-Project for the code in this route, and adapted it
const router = require('express').Router();
const fs = require('fs');

//Universally Unique ID
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving notes
router.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notes);
});

//POST route for notes
router.post('/notes', (req, res) => {

  //Destructures note post elements
  const { noteTitle, noteText } = req.body;
  
  //Checks if title and text are present in the note post
  if (noteTitle && noteText) {
    const newNote = {
      noteTitle: req.body.title,
      noteText: req.body.text,
      note_id: uuidv4(),
    };

  //Adds new note to db file
  notes.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(notes));
  res.json(notes);

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