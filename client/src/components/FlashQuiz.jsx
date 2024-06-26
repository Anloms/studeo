import { useState } from 'react'; 
import './CSS/FlashQuiz.css';
import Previous_Next from './buttons/Previous_Next';

export default function FlashQuiz({ 
    flashcardCollection, 
    collectionList, 
    selectedSet
}){

  const [dataArray, setDataArray] = useState([]);
  const [boundary, setBoundary] = useState([]);
  const [question, setQuestion] =useState(true);
  const [answer, setAnswer] =useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

 collectionList.map((value)=>{
        selectedSet.map((itemId)=>{
            if(value._id===itemId && !boundary.includes(itemId)){
                setBoundary((previous)=> [...previous, value._id])
                setDataArray((previous) => {
                    return [...previous, ...value.data]  
                })
            }
        })
  })
  const filteredCollection = flashcardCollection.filter(card => dataArray.includes(card._id));

  const currentCard = filteredCollection.length > 0 && currentIndex >= 0 && currentIndex < filteredCollection.length 
    ? filteredCollection[currentIndex] 
    : null;

  function toggleCard(){
    if(question){
        setAnswer(true)
        setQuestion(false)
    }
    if(answer){
        setQuestion(true)
        setAnswer(false)
    }
  }

  function handlePreviousIndex(){
    setCurrentIndex((previous)=> (previous > 0 ? previous-1 : 0));    
  }
  
  function handleNextIndex(){
    setCurrentIndex((previous)=> ((previous < dataArray.length-1) ? previous+1 : dataArray.length-1)) 
  }
  return (
    <div className="quiz_container">
    {currentCard && (
      <div>
        <div className="FlashFace">
          {question && 
          (<button role="button" 
                   className='questionToggle' 
                   onClick={toggleCard}>
                    <p>{currentCard.question}</p>
          </button>)}
          {answer &&
          (<button role="button" 
                   className='answerToggle' 
                   onClick={toggleCard}> 
                   <p>{currentCard.correctAnswer}</p>
                   </button>)}
    
        <Previous_Next
        handleNextIndex={handleNextIndex}
        handlePreviousIndex={handlePreviousIndex}
        ></Previous_Next>
        </div>
      </div>
    )}
    {!currentCard && <p>No cards available.</p>}

  </div>
  );
}