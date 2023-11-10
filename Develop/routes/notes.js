const router = require('express').Router();

//Universally Unique ID
const { v4:uuidv4 } = require('uuid');

//GET route for retrieving notes
router.get('/', (req, res) => 
    readFromFile('/.db/db.json').then((data) => res.json(JSON.parse(data)))
);

//POST route for notes


module.exports = router;