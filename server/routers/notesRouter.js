const express = require('express');
const router = express.Router();

const simpleJsonStore = require('simple-json-store');
const store = new simpleJsonStore('./data.json',{
    notes:[]
});

  router.get('/',(req,res) => {
    res.json(store.get('notes'));
  });
  
  router.post('/', (req,res) => {
    const notes =store.get('notes');
    let newNote = {
        id:notes.length > 0 ? (notes[notes.length-1].id + 1) : 1,
        title: req.body.title,
        description: req.body.description
    };

    notes.push(newNote);
    store.set('notes',notes);

    res.json(notes);
  });

  router.get('/:id',(req,res) => {
    const id = req.params.id;
    const notes = store.get('notes');
    const note = notes.find(note =>  note.id == id);

    res.json(note);
  });


  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const notes = store.get('notes');
    const newNotes = notes.filter(note => Number(note.id) !== Number(id));
  
    store.set('notes', newNotes);
    res.json(newNotes);
  });

  module.exports = router;