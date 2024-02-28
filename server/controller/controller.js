'use strict'
const Flashcard = require('../model/flash.model.js')

async function getThemAll (req,res) {
    try {
        const collection = await Flashcard.find();
        res.status(200).json(collection)

    }catch(error) {
        console.log('error in getThemAll controller', error)
        res.sendStatus(500)
    }
}
async function addFlashcard (req,res) {
    try {
        const newOne = new Flashcard({
            question: req.body.question,
            correctAnswer: req.body.correctAnswer,
            wrongAnswer_1: req.body.wrongAnswer_1,
            wrongAnswer_2: req.body.wrongAnswer_2,
            wrongAnswer_3: req.body.wrongAnswer_3

        })

        if(!newOne.question) {
            return res.send(400).json({message: 'question field empty'});
        } 
         if(!newOne.correctAnswer) {
            return res.send(400).json({message: 'correctAnswer field empty'});
        }
        if(!newOne.wrongAnswer_1) {

            return res.send(400).json({message: 'wrongAnswer_1 field empty'});
        }
        if(!newOne.wrongAnswer_2) {

            return res.send(400).json({message: 'wrongAnswer_2 field empty'});
        } 
        if(!newOne.wrongAnswer_3) {

            return res.send(400).json({message: 'wrongAnswer_3 field empty'});
        }else{

            const saved = await newOne.save();
            res.status(201).json(saved)
        }

    } catch(error) {
        console.log('error in addFlashcard controller', error)
        res.sendStatus(500).json({message : 'error in the controller'})
    }
}

module.exports = {
    getThemAll,
    addFlashcard
}

// {
//     "question" : "How many moons has Jupiter?",
//     "correctAnswer": "95",
//     "wrongAnswer_1": "120",
//     "wrongAnswer_2": "12",
//     "wrongAnswer_3": "2"

// }