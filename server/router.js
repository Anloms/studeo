const express = require('express')
const router = express.Router();

const Flashcard = require('./controller/controller.js');



router.get('/flashcards', Flashcard.getThemAll);
router.post('/flashcards', Flashcard.addFlashcard);

router.get('/collections', Flashcard.getTheCollections);
router.post('/collections', Flashcard.createNewCollection);
router.get('/collections/:id', Flashcard.getCollectionById)

router.put('/collections/:id/edit', Flashcard.addFlashcardToCollection)
// router.delete('collections/:id/delete', Flashcard.deleteFlashcardFromCollection)


module.exports = router;