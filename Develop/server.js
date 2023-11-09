const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const app = express();

// Import the feedback router
const api = require('./public/assets/js/index');

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(express.static('public'));

//Static homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);

//Route for note data

//Listen for form submission


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
