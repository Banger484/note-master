const notes = require('express').Router()
const uniqid = require('uniqid')
const { getNotes, saveNote, deleteNote } = require('../helpers/fsHelpers')

notes.get('/', (req, res) => {
    res.json(getNotes())
})

notes.post('/', (req, res) => {
    req.body = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    res.json(saveNote(req.body, './db/db.json'))
})

notes.delete('/:id', (req, res) => {
    deleteNote('./db/db.json', req.params.id)
    console.log('deletes a note from the db.json');
})



module.exports = notes