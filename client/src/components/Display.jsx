import './CSS/Display.css'
import FlashCreate from './FlashCreate'
import FlashStudy from './FlashStudy'
import FlashCollection from './FlashCollection'
import FlashTest from './FlashTest'
import { useState } from 'react'

const url = 'http://localhost:3000'

export default function Display(
    {
    addFlashcard, 
    addCollection,
    viewCollectionClick, 
    createClick, 
    studyClick, 
    testClick,
    topMost,
    collectionList,
    flashcardCollection
    }
){
    const [collectionId, setCollectionId] = useState('')


    function handleDropDown_addId(dropdownId){
     setCollectionId(()=>dropdownId)
    }
    console.log("current value of Collection ID", collectionId)

    const addToExistingCollection = (id, flashID) => {
        console.log('id ===> ',id)
        fetch(url+`/collections/${id}/edit`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'flashcard_id': `${flashID}`
          })
        })
        .then(res=>{
          return res.json()
        })
        .catch((error)=>{
          console.log("error in your addToExistingCollection", error)
        })
      }
  
      function handleClickExistingCollection_Btn(){
        addToExistingCollection(collectionId, topMost[0]._id)
        setCollectionId('')
        
      }

    return (
        <div className='display'>
        {/* <h1>DISPLAY - prepare text briefly explaining how to use the app</h1> */}
        {createClick && (
        <FlashCreate 
        addFlashcard={addFlashcard} 
        addCollection={addCollection}
        collectionList={collectionList} 
        handleClickExistingCollection_Btn={handleClickExistingCollection_Btn} 
        handleDropDown_addId={handleDropDown_addId}
        collectionId={collectionId}
        ></FlashCreate>)}

        {studyClick && (
        <FlashStudy 
        addFlashcard={addFlashcard} 
        collectionList={collectionList} 
        handleClickExistingCollection_Btn={handleClickExistingCollection_Btn} 
        handleDropDown_addId={handleDropDown_addId}
        ></FlashStudy>)}

        {testClick && (
        <FlashTest 
        addFlashcard={addFlashcard} 
        collectionList={collectionList} 
        handleClickExistingCollection_Btn={handleClickExistingCollection_Btn} 
        handleDropDown_addId={handleDropDown_addId}
        ></FlashTest>)}

        {viewCollectionClick && (
        <FlashCollection 
        collectionList={collectionList}
        flashcardCollection={flashcardCollection}
        ></FlashCollection>)}
        
        </div>
    )
}