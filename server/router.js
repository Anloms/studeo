const express = require('express')
const router = express.Router();

const Flashcard = require('./controller/controller.js');



router.get('/flashcards', Flashcard.getThemAll);
router.post('/flashcards', Flashcard.addFlashcard);

module.exports = router;