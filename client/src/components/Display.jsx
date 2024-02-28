import './CSS/Display.css'
import FlashCreate from './FlashCreate'
import FlashStudy from './FlashStudy'
import FlashCollection from './FlashCollection'
import FlashTest from './FlashTest'

export default function Display({addFlashcard, viewCollectionClick, createClick, studyClick, testClick}){

    return (
        <div className='display'>
        {/* <h1>DISPLAY - prepare text briefly explaining how to use the app</h1> */}
        {createClick && (<FlashCreate addFlashcard={addFlashcard}></FlashCreate>)}
        {viewCollectionClick && (<FlashCollection></FlashCollection>)}
        {studyClick && (<FlashStudy></FlashStudy>)}
        {testClick && (<FlashTest></FlashTest>)}
        
        </div>
    )
}