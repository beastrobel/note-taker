const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/notes.js');
const PORT = 3001;

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
  res.sendFile(path.join(___dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
