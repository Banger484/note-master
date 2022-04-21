const notes = require('express').Router()
const notesData = require('../db/db.json')
const { getNotes, saveNote, deleteNote } = require('../helpers/fsHelpers')

notes.get('/', (req, res) => {
    res.json(getNotes())
})

notes.post('/', (req, res) => {
    const newNote = req.body
    console.log(newNote);
    res.json(saveNote(req.body, './db/db.json')).redirect(req.originalUrl)
})

notes.delete('/:id', (req, res) => {
    deleteNote()
    console.log('deletes a note from the db.json');
})




module.exports = notes