import './CSS/FlashCreate.css'
import { useState } from 'react';

export default function FlashCreate({addFlashcard}){
   const [question, setQuestion] = useState('');
   const [correctAnswer, setCorrectAnswer] = useState('');
   const [wrongAnswer_1, setWrongAnswer_1] = useState('');
   const [wrongAnswer_2, setWrongAnswer_2] = useState('');
   const [wrongAnswer_3, setWrongAnswer_3] = useState('');
   
   function handleSubmit(event){
      event.preventDefault()
      const newFlashCard = {
        question,
        correctAnswer,
        wrongAnswer_1,
        wrongAnswer_2,
        wrongAnswer_3
      }

      //direct here newFlashCard to database
      addFlashcard(newFlashCard)
      setQuestion('');
      setCorrectAnswer('');
      setWrongAnswer_1('');
      setWrongAnswer_2('');
      setWrongAnswer_3('');

    }
    return (
      <>
        <div className="flashcard">
       <form onSubmit={handleSubmit}>

        <div className="question">
            <label>phrase your question</label>
            <input type='text' value={question} onChange={(e)=> setQuestion(e.target.value)}></input>
        </div>
        <div className="answer">
            <label> here give a correct answer</label>
            <input type='text' value={correctAnswer} onChange={(e)=> setCorrectAnswer(e.target.value)}></input>
        </div>
        <div className="answer">
            <label>here give a wrong answer</label>
            <input type='text' value={wrongAnswer_1} onChange={(e)=> setWrongAnswer_1(e.target.value)}></input>
        </div>
        <div className="answer">
            <label>here give a wrong answer</label>
            <input type='text' value={wrongAnswer_2} onChange={(e)=> setWrongAnswer_2(e.target.value)}></input>
        </div>
        <div className="answer">
            <label>here give a wrong answer</label>
            <input type="text" value={wrongAnswer_3} onChange={(e)=> setWrongAnswer_3(e.target.value)}></input>
        </div>
        <div className='btn_box'>
            <button type="submit">create</button>
            <button>discard</button>
            <button>autofill</button>
        </div>
       </form>
       <section>
        <div className='section_question'>
            <p>Where would you like to add your flashcards?</p>
        </div>
        <div className='section_options'>
            <button>existing collection</button>
            <button>new collection</button>
        </div>
       </section>
        </div>
      </>
    )
}