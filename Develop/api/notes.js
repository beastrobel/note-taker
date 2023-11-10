//I referenced the Mini-Project for the code in this route, and adapted it
const router = require('express').Router();
const fs = require('fs');
const pulls = require('../db/db.json');

//Universally Unique ID
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving notes
router.get('/notes', (req, res) => res.json(pulls));

//POST route for notes
router.post('/notes', (req, res) => {  
  let response;

  //Checks if title and text are present in the note post
  if (req.noteTitle && req.noteText) {
    response = {
      status: 'sucess',
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json(response);
  }

  //Logs data
  console.log(req.body);

});

module.exports = router;