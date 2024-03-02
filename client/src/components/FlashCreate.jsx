import './CSS/FlashCreate.css';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';

export default function FlashCreate({
    addFlashcard, 
    addCollection,
    collectionList, 
    handleDropDown_addId,
    handleCollectionUpdate,
    collectionId
 })
 {
   const [question, setQuestion] = useState('');
   const [correctAnswer, setCorrectAnswer] = useState('');
   const [collection_name, setCollection_name] = useState('');
   const [createClicked, setCreateClicked] = useState(false);
   const [newCollectionClick, setNewCollectionClick] = useState(false);
   const [oldCollectionClick, setOldCollectionClick] = useState(false);
   const [justCreateClick, setJustCreateClick]= useState(false);
   const [addClick, setAddClick] = useState(false);

//Conditionals and toggles
   function conditionalStyle () {
    if(createClicked===true){
      return "section_question_alert"
    } else{
      return "section_question"
    }
   };
 
   function handleClick () {
    if (newCollectionClick === true){
      setNewCollectionClick(false)
    } else {
      setNewCollectionClick(true)
    }
   };

   function handleClick_oldCollection () {
      setOldCollectionClick(true)
   };

   //handlers
   function handleJustCreate () {
      const newFlashCard = {
        question,
        correctAnswer
      };
      addFlashcard(newFlashCard);
      setJustCreateClick(false);
      resetTopMost_flashcard();
      setQuestion('');
      setCorrectAnswer('');
      
      setCreateClicked(false);
   };

   async function handleUpdate_oldCollection () {

      const newFlashCard = {
        question,
        correctAnswer
      };
      const flashVar = await addFlashcard(newFlashCard);
      const collVar = await collectionId;

      setOldCollectionClick(false);
      handleCollectionUpdate(flashVar._id, collVar);//change format of this function

      setQuestion('');
      setCorrectAnswer('');

      setCreateClicked(false);
   };

   async function handleUpdate_newCollection () {
        const newFlashCard = {
          question,
          correctAnswer
        };

        const flashVar = await addFlashcard(newFlashCard);
      
        const newCollection = {
            collection_name
          };

        const collectionVar = await addCollection(newCollection);
        handleCollectionUpdate(flashVar._id, collectionVar._id);
     
       //state reset
        handleClick();
        setCreateClicked();
        setAddClick(false);
        setQuestion('');
        setCorrectAnswer('');
    };

   function handleSubmit (event) {
    event.preventDefault();
    if (createClicked) {

      if (justCreateClick) {
        return handleJustCreate()
      };
      if (addClick) {
        return  handleUpdate_newCollection()
      };
      if (oldCollectionClick) {
        return  handleUpdate_oldCollection()
      };
    };
   };

    return (
      <>
        <div className="flashcard">
       <form onSubmit={handleSubmit} id="formField">

        <div className="question">
            <label>phrase your question</label>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}></input>
        </div>
        <div className="answer">
            <label> here give a correct answer</label>
            <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}></input>
        </div>

        <div className="btn_box">
            <button onClick={() => setCreateClicked(true)}>create</button>
            <button>discard</button>
        </div>
       
       <section>
        <div className={conditionalStyle()} >
            <p>Where would you like to add your flashcards?</p>
        </div>
        <div className='section_options'>
            <div>
              <button onClick={() => setJustCreateClick(true)} className="just_create_btn">Just Create</button>
            </div>
            <DropDownMenu 
            collectionList={collectionList} 
            handleDropDown_addId={handleDropDown_addId}
            handleClick_oldCollection={handleClick_oldCollection}
            name="Existing Collection"></DropDownMenu>
            {
              newCollectionClick ?
               (<>
                <label>
                  Add name of your collection
                </label>
                <input  value={collection_name} onChange={(e) => setCollection_name(e.target.value)}></input>
               <button onClick={() => setAddClick(true)}>Add</button>
               
               </>)
               : (<><button onClick={handleClick}>new collection</button></>)
            }
        </div>
       </section>
       </form>
        </div>
      </>
    );
};