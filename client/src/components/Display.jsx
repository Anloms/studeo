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
    topMost_Flashcard,
    topMost_Collection,
    collectionList,
    flashcardCollection,
    resetTopMost_flashcard,
    resetTopMost_collection
    }
){
    const [collectionId, setCollectionId] = useState('')


    function handleDropDown_addId(dropdownId){
     setCollectionId(()=>dropdownId)
    }

   

    const updateCollection = (flashID, id) => {
      
        console.log('id ===> ',id)
        console.log('flashId ====> ', flashID)

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
    //  console.log(topMost_Collection, '<=== topMost_Collection')
    //  console.log(topMost_Collection._id, '<===topMost_Collection')
    //  console.log(typeof topMost_Collection)
    //  console.log(typeof topMost_Collection._id)
    //  console.log(topMost_Flashcard, '<==== topMost_Flashcard')
    //  console.log(topMost_Flashcard._id, '<===== topMost_Flashcard._id')
      function handleCollectionUpdate(flashId, collectionID){
        console.log(flashId)
        
          updateCollection(flashId, collectionID);
          resetTopMost_collection()
          resetTopMost_flashcard()
           
        }
       
        

    return (
        <div className='display'>
        {/* <h1>DISPLAY - prepare text briefly explaining how to use the app</h1> */}
        {createClick && (
        <FlashCreate 
        addFlashcard={addFlashcard} 
        addCollection={addCollection}
        collectionList={collectionList} 
        handleCollectionUpdate={handleCollectionUpdate} 
        handleDropDown_addId={handleDropDown_addId}
        collectionId={collectionId}
        topMost_Collection={topMost_Collection}
        topMost_Flashcard={topMost_Flashcard}
        resetTopMost_collection={resetTopMost_collection}
        resetTopMost_flashcard={resetTopMost_flashcard}
        ></FlashCreate>)}

        {studyClick && (
        <FlashStudy 
        addFlashcard={addFlashcard} 
        collectionList={collectionList} 
        handleCollectionUpdate={handleCollectionUpdate} 
        handleDropDown_addId={handleDropDown_addId}
        ></FlashStudy>)}

        {testClick && (
        <FlashTest 
        addFlashcard={addFlashcard} 
        collectionList={collectionList} 
        handleCollectionUpdate={handleCollectionUpdate} 
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