import './CSS/Display.css';
import { useState } from 'react';
import FlashCreate from './FlashCreate';
import FlashStudy from './FlashStudy';
import FlashCollection from './FlashCollection';
// import FlashTest from './FlashTest';

const url = 'http://localhost:3000';

export default function Display(
  {
    addFlashcard,
    addCollection,
    viewCollectionClick,
    createClick,
    studyClick,
    testClick,
    collectionList,
    flashcardCollection
    }
){
  const [collectionId, setCollectionId] = useState('');
  const [oldCollectionClick, setOldCollectionClick] = useState(false);

  function handleClick_oldCollection() {
    if(oldCollectionClick){
      setOldCollectionClick(false)
    }else{
      setOldCollectionClick(true);
    }
  }

  function handleDropDown_addId (dropdownId) {
      setCollectionId(() => dropdownId);
  }

  const updateCollection = (flashID, id) => {
    
    fetch(url + `/collections/${id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'flashcard_id': `${flashID}`
    })
      })
      .then(res => {
          return res.json()
        })
      .catch((error) => {
        console.log("error in your addToExistingCollection", error)
      });
  };

  function handleCollectionUpdate(flashId, collectionID){
    updateCollection(flashId, collectionID);
  }

  return (
    <div className="display">
      { /* <h1>DISPLAY - prepare text briefly explaining how to use the app</h1> */ }
      { createClick && (
        <FlashCreate
          addFlashcard={addFlashcard}
          addCollection={addCollection}
          collectionList={collectionList}
          handleCollectionUpdate={handleCollectionUpdate}
          handleDropDown_addId={handleDropDown_addId}
          collectionId={collectionId}
          oldCollectionClick={oldCollectionClick}
          handleClick_oldCollection={handleClick_oldCollection}
        ></FlashCreate>)}
      
{ studyClick && (
        <FlashStudy
          identifier='Study'
          addFlashcard={addFlashcard}
          collectionList={collectionList}
          handleCollectionUpdate={handleCollectionUpdate}
          handleDropDown_addId={handleDropDown_addId}
          oldCollectionClick={oldCollectionClick}
          handleClick_oldCollection={handleClick_oldCollection}
          collectionId={collectionId}
          flashcardCollection={flashcardCollection}
        ></FlashStudy>)}
      
{ testClick && (
        <FlashStudy
        identifier='Test'
        addFlashcard={addFlashcard}
        collectionList={collectionList}
        handleCollectionUpdate={handleCollectionUpdate}
        handleDropDown_addId={handleDropDown_addId}
        oldCollectionClick={oldCollectionClick}
        handleClick_oldCollection={handleClick_oldCollection}
        collectionId={collectionId}
        flashcardCollection={flashcardCollection}
        ></FlashStudy>)}
      
{ viewCollectionClick && (
        <FlashCollection
          collectionList={collectionList}
          flashcardCollection={flashcardCollection}
        ></FlashCollection>)}
    </div>
  );
}