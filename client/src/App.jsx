import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Display from './components/Display'

const url = 'http://localhost:3000'

function App() {
  const [ flashcardCollection, setFlashcardCollection] = useState([])
  console.log('flashcardCollection',flashcardCollection)

  const handleFetch = () =>{
    fetch(url +'/flashcards')
    .then(response =>{
      if(response.headers.get('Content-Type').includes('application/json')){
        return response.json()
      }
      throw new TypeError({message: 'You are not getting json'})
    })
    .then(data=>{
      console.log("fetching data GET",data)
      //handle data later
    }).catch((error)=>{
      console.log('We have an error here', error)
    })
  }

  const addFlashcard = (flash) =>{
    fetch(url +'/flashcards',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
     body: JSON.stringify(flash)
    })
    .then(()=>{
      setFlashcardCollection([...flashcardCollection, flash])
      handleFetch()
    })
  }
  useEffect(()=>{
    handleFetch()
  },[]) 

  return (
    <>
      <Header></Header>
      
      <main>
      <NavBar></NavBar>
      <Display addFlashcard={addFlashcard}></Display>
      </main>
    </>
  )
}

export default App
