import { useState } from 'react';
import './CSS/NavBar.css'

export default function NavBar({handleClick}){
  
    return (
        
        <div className='nav_container'>
            <button onClick={()=>handleClick('create')}>make a new flashcard</button>
            <button onClick={()=>handleClick('study')}>study your collection</button>
            <button onClick={()=>handleClick('test')}>test yourself</button>
            <button onClick={()=>handleClick('view')}>view your collection</button>
        </div>
        
    )

}