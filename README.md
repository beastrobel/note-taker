# Note Taker

## Description

For this challenge, we were given the front-end of a Note Taker application and asked to develop the back-end using Express.js. The application allows users to write notes, save them, and access them later. My strategy for this project was to modularize the code by creating a server file and a route file. In server.js, I included middleware, a static homepage route, a GET route for the notes.html page, as well as the local host port. In notes.js, I included a GET route for the contents of db.json, where the notes are stored. I also included a POST route for the user's new note. When the new note is saved, it is then pushed into the db.json file for storage.

## Usage

The website’s URL is https://beastrobel.github.io/note-taker. A screenshot can be viewed below. In order to use the Note Taker, write a note and click the save button. The saved note will appear on the left sidebar, click to view the note. The repository for this project can be found at https://github.com/beastrobel/note-taker.

![Screenshot (106)](https://github.com/beastrobel/note-taker/assets/137853377/f411bcf0-62d8-467b-889a-d056a9533d64)

![Screenshot (107)](https://github.com/beastrobel/note-taker/assets/137853377/3c7f8996-da61-423f-8c41-8983454892da)

## Credits

The starter code for this project was provided by MSU’s Coding Bootcamp. I am responsible for coding the back-end portion of this project. I received help from AskBCS Learning Assistants, and I also referenced Thomas Calle's YouTube tutorial: https://www.youtube.com/watch?v=-UiqzvUe360 for help.
 
## License

MIT License
