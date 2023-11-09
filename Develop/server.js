const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const app = express();

//Middleware
app.use(express.static('public'));

//Static homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
