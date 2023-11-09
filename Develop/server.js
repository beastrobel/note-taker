const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const app = express();
const api = require('./routes/api');

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(express.static('public'));

//Static homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

//API route
app.use('/api', api);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
