'use strict'
const Flashcard = require('../model/flash.model.js')
const Collection = require('../model/set.model.js');

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
            correctAnswer: req.body.correctAnswer
     

        })

        if(!newOne.question) {
            return res.status(400).json({message: 'question field empty'});
        } 
         if(!newOne.correctAnswer) {
            return res.status(400).json({message: 'correctAnswer field empty'});
        }
  
        else{

            const saved = await newOne.save();
            res.status(201).json(saved)
        }

    } catch(error) {
        console.log('error in addFlashcard controller', error)
        res.sendStatus(501).json({message : 'error in the controller'})
    }
}

async function getTheCollections (req, res) {
    try {
        const collection = await Collection.find();
        res.status(200).json(collection)
    }catch (e) {
        console.log("problem in your getTheCollection controller", e)
        res.sendStatus(502)
    }
}

async function createNewCollection (req,res) {
    try {
        const newCollection = new Collection({
          collection_name: req.body.collection_name,
          data: []
        })
        
        if(!newCollection.collection_name) {
           return res.status(400).json({message: 'new Collection improperly defined'})
        }
       
        const saved = await newCollection.save();
        
        res.status(200).json(saved)

    } catch(e) {
        console.log('problem in your createNewCollection', e)
        res.sendStatus(503)
    }
}
async function addFlashcardToCollection (req,res) {
    try{
        const element = await Flashcard.findById(req.body.flashcard_id)
        const collection = await Collection.findById(req.params.id)
        console.log(element)
        if(!element || !collection) {
            return res.status(400).json({message: '400 error in addFlashcardToCollection controller'})
        }
        collection.data.push(element._id)
        const saved = await collection.save()
        res.status(200).json(saved)

    } catch (e) {
        console.log("error in addFlashcardToCollection controller... ",e)
        res.sendStatus(504)
    }
}

async function getCollectionById(req,res) {
    try {
        const collection = await Collection.findById(req.params.id)

        if(!collection){
            return res.status(400).json({message: 'no such id'})
        }
        
        res.status(200).send(collection)

    } catch (e){
        console.log('getCollectionById controller problem', e)
        res.sendStatus(505)
    }
}

// async function deleteFlashcardFromCollection (req,res) {
//     try {
//          const element = await Collection.findById(req.params.id)


//     }catch (e) {
//         console.log('error in deleteFlashcardFromCollection', e);
//         res.sendStatus(505)
//     }
// }

module.exports = {
    getThemAll,
    addFlashcard,
    getTheCollections,
    createNewCollection,
    addFlashcardToCollection,
    getCollectionById
}

