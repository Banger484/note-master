const fs = require("fs");
const util = require("util");
const notesData = require("../db/db.json");

// Create a getNotes function that returns all of the saved notes from db.json
function getNotes() {
  return notesData;
}
// Create a saveNote function that saves a new note to the db.json file and returns
// the new note as JSON
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

function saveNote(content, file) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsed = JSON.parse(data);
            parsed.push(content);
            writeToFile(file, parsed);
        }
    })
  };

// Create a deleteNote function that deletes a note from the db.json file and returns a success message(bonus task)

function deleteNote() {
  console.log("deleteNote wired.");
}

module.exports = { getNotes, saveNote, deleteNote };
