import './CSS/FlashCreate.css';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';

export default function FlashCreate({
  addFlashcard,
  addCollection,
  collectionList,
  handleDropDown_addId,
  handleCollectionUpdate,
  collectionId,
  oldCollectionClick,
  handleClick_oldCollection
}) {
  const [questionAnswer, setQuestionAnswer] = useState({question: '', answer: ''});
  const [collection_name, setCollection_name] = useState('');
  const [createClicked, setCreateClicked] = useState(false);
  const [newCollectionClick, setNewCollectionClick] = useState(false);
  // const [oldCollectionClick, setOldCollectionClick] = useState(false);
  const [justCreateClick, setJustCreateClick] = useState(false);
  const [addClick, setAddClick] = useState(false);

  // Conditionals and toggles
  function conditionalStyle() {
    if (createClicked === true) {
      return 'section_question_alert';
    }
    return 'section_question';
  }

  function handleClick() {
    if (newCollectionClick === true) {
      setNewCollectionClick(false);
    } else {
      setNewCollectionClick(true);
    }
  }
 
  // handlers
  function handleJustCreate() {
    let question = questionAnswer.question, correctAnswer = questionAnswer.answer;
    
    const newFlashCard = {
      question,
      correctAnswer
    };
    addFlashcard(newFlashCard);
    setJustCreateClick(false);
 
    setQuestionAnswer({question: '', answer: ''})
    setCreateClicked(false);
  }

  async function handleUpdate_oldCollection() {
    let question = questionAnswer.question, correctAnswer = questionAnswer.answer;
    
    const newFlashCard = {
      question,
      correctAnswer
    };
    const flashVar = await addFlashcard(newFlashCard);
    const collVar = await collectionId;

    handleClick_oldCollection();
    handleCollectionUpdate(flashVar._id, collVar);// change format of this function
    
    handleDropDown_addId()
    // setQuestion('');
    // setCorrectAnswer('');
    setQuestionAnswer({question: '', answer: ''})
    setCreateClicked(false);
  }
  
  async function handleUpdate_newCollection() {
    let question = questionAnswer.question, correctAnswer = questionAnswer.answer;
    
    const newFlashCard = {
      question,
      correctAnswer
    };

    const flashVar = await addFlashcard(newFlashCard);

    const newCollection = {
      collection_name,
    };

    const collectionVar = await addCollection(newCollection);
    handleCollectionUpdate(flashVar._id, collectionVar._id);

    // state reset
    handleDropDown_addId()
    handleClick();
    setCreateClicked();
    setAddClick(false);
    setQuestionAnswer({question: '', answer: ''})
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (createClicked) {
      if (justCreateClick) {
        return handleJustCreate();
      }
      if (addClick) {
        return handleUpdate_newCollection();
      }
      if (oldCollectionClick) {
        return handleUpdate_oldCollection();
      }
    }
  }

  return (
    
      <form onSubmit={handleSubmit} id="formField">
        <div className="create_discard_field">
        <div className="question">
          <label>phrase your question</label>
          <input type="text" value={questionAnswer.question} onChange={(e) => setQuestionAnswer({question: e.target.value})} />
        </div>
        <div className="answer">
          <label> here give a correct answer</label>
          <input type="text" value={questionAnswer.answer} onChange={(e) => setQuestionAnswer({answer: e.target.value})} />
        </div>

        <div className="btn_box">
          <button onClick={() => setCreateClicked(true)}>create</button>
          <button onClick={() => setQuestionAnswer({question: '', answer: ''})}>discard</button>
        </div>
        </div>

        <section>
          <div className={conditionalStyle()}>
            <p>Where would you like to add your flashcards?</p>
          </div>
          <div className="section_options">
            <div>
              <button onClick={() => setJustCreateClick(true)} className="just_create_btn">Just Create</button>
            </div>
            <DropDownMenu
              collectionList={collectionList}
              handleDropDown_addId={handleDropDown_addId}
              handleClick_oldCollection={handleClick_oldCollection}
              name="Existing Collection"
            />
            {
              newCollectionClick
                ? (
                  <>
                    <input 
                    className="inputNameCollection" 
                    placeholder="Add name of your collection.."
                    value={collection_name} 
                    onChange={(e) => setCollection_name(e.target.value)} 
                    />
                    <button onClick={() => setAddClick(true)}>Add</button>

                  </>
                )
                : (<button onClick={handleClick}>new collection</button>)
            }
          </div>
        </section>
      </form>
  );
}
