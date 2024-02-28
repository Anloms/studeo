import './CSS/Display.css'
import FlashCreate from './FlashCreate'
export default function Display({addFlashcard}){

    return (
        <div className='display'>
        {/* <h1>DISPLAY - prepare text briefly explaining how to use the app</h1> */}
        <FlashCreate addFlashcard={addFlashcard}></FlashCreate>
        </div>
    )
}