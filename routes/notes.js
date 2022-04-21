const notes = require('express').Router()
const notesData = require('../db/db.json')
const uniqid = require('uniqid')
const { getNotes, saveNote, deleteNote } = require('../helpers/fsHelpers')

notes.get('/', (req, res) => {
    res.json(getNotes())
})

notes.post('/', (req, res) => {
    const newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    const note = saveNote(newNote, './db/db.json')
    res.json(note)
})

notes.delete('/:id', (req, res) => {
    deleteNote()
    console.log('deletes a note from the db.json');
})




module.exports = notes