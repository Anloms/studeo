import './CSS/FlashCreate.css'
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';


export default function FlashCreate(
  {
    addFlashcard, 
    addCollection,
    collectionList, 
    handleDropDown_addId,
    handleClickExistingCollection_Btn,
    collectionId
  }){
   const [question, setQuestion] = useState('');
   const [correctAnswer, setCorrectAnswer] = useState('');
   const [collection_name, setCollection_name] = useState('')
   const [createClicked, setCreateClicked] = useState(false);
   const [newCollectionClick, setNewCollectionClick] = useState(false);
   const [oldCollectionClick, setOldCollectionClick] = useState(false)
   
   function conditionalStyle(){
    if(createClicked===true){
      return 'section_question_alert'
    } else{
      return 'section_question'
    }
   }
   function handleClick(){
    if(newCollectionClick === true){
      setNewCollectionClick(false)
    }else{
      setNewCollectionClick(true)
    }
   }

   function handleClick_oldCollection(){
    if(oldCollectionClick===true){
      setOldCollectionClick(false)
    }else{
      setOldCollectionClick(true)
    }
   }

    function handleSubmit_flashcard(event){
      event.preventDefault()
      const newFlashCard = {
        question,
        correctAnswer
      }
      setCreateClicked(true)
      //direct newFlashCard to database

      // addFlashcard(newFlashCard)
      // setQuestion('');
      // setCorrectAnswer('');

      if(newCollectionClick==true){
        const newCollection={
          collection_name
        }
     
        addFlashcard(newFlashCard);
        addCollection(newCollection);
        const idValueCollection = newCollection._id;
        const idValueFlashcard = newFlashCard._id;
        handleClickExistingCollection_Btn();
        handleClick();
        setQuestion('');
        setCorrectAnswer('');
       
      }
      else if(oldCollectionClick===true){
        console.log("collectionId in else if (add to existing collection)", collectionId)
        addFlashcard(newFlashCard);
        const idValueCollection = collectionId;
        const idValueFlashcard = newFlashCard._id;
        console.log("flashcardId in else if (add to existing collection)", collectionId)
        handleClickExistingCollection_Btn();
        handleClick();
        setQuestion('');
        setCorrectAnswer('');
      }
    }
    console.log(collectionId)

    // function handleSubmit_Collection(event){
    //   event.preventDefault()
    //   const newCollection={
    //     collection_name
    //   }
    //   addCollection(newCollection)
    //   handleClick()

    // }
   
    return (
      <>
        <div className="flashcard">
       <form onSubmit={handleSubmit_flashcard}>

        <div className="question">
            <label>phrase your question</label>
            <input type='text' value={question} onChange={(e)=> setQuestion(e.target.value)}></input>
        </div>
        <div className="answer">
            <label> here give a correct answer</label>
            <input type='text' value={correctAnswer} onChange={(e)=> setCorrectAnswer(e.target.value)}></input>
        </div>

        <div className='btn_box'>
            <button type="submit">create</button>
            <button>discard</button>
        </div>
       </form>
       <section>
        <div className={conditionalStyle()} >
            <p>Where would you like to add your flashcards?</p>
        </div>
        <div className='section_options'>
            <div>
              <button className='just_create_btn'>Just Create</button>
            </div>
            <DropDownMenu 
            collectionList={collectionList} 
            handleDropDown_addId={handleDropDown_addId} 
            handleClickExistingCollection_Btn={handleClickExistingCollection_Btn} 
            handleClick_oldCollection={handleClick_oldCollection}
            name='Existing Collection'></DropDownMenu>
            {
              newCollectionClick ?
               (<>
               <form onSubmit={handleSubmit_flashcard}>
                <label>
                  Add name of your collection
                </label>
                <input value={collection_name} onChange={(e)=>setCollection_name(e.target.value)}></input>
               <button type="submit">new collection</button>
               </form>
               </>):
               (<><button onClick={handleClick}>new collection</button></>)
            }
            
        </div>
       </section>
        </div>
      </>
    )
}