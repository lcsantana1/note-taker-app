const router = require('express').Router();
const {readAndAppend, readFromFile}= require('../helpers/fsUtils')

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
readFromFile('./db/db.json')
    .then((notes) => {
      return res.json(JSON.parse(notes));
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  readAndAppend(req.body, './db/db.json')

  res.json('note has been added')
    
});



module.exports = router;
