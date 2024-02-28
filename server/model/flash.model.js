const mongoose = require('./index.model.js');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    question: {
        type: String,
        required: [true, "text is required"]
    },
    correctAnswer: {
        type:String,
        required: [true, 'text is required']
    },
    wrongAnswer_1: {
        type: String,
        required:[true, 'text is required']
    },
    wrongAnswer_2: {
        type:String,
        required: [true, 'text is required']
    },
    wrongAnswer_3: {
        type: String,
        required: [true, 'text is required']
    }
}) 

const Flashcard = mongoose.model('FlashcardSchema', FlashcardSchema)

module.exports = Flashcard;