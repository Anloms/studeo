import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Display from './components/Display'

function App() {
  

  return (
    <>
      <Header></Header>
      
      <main>
      <NavBar></NavBar>
      <Display></Display>
      </main>
    </>
  )
}

export default App
