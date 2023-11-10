const express = require('express');
const app = express();
const path = require('path');
const api = require('./api/notes.js');

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API route
app.use('/api', api);

//Middleware
app.use(express.static('public'));

//Static homepage route
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Get route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
 
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
