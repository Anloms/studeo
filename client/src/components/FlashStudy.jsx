import { useState } from 'react';
import './CSS/FlashStudy.css';
import FlashQuiz from './FlashQuiz';
import DropDownMenu from './DropDownMenu';

export default function FlashStudy({ 
    flashcardCollection, 
    collectionId, 
    collectionList, 
    oldCollectionClick, 
    handleClick_oldCollection, 
    handleDropDown_addId,
    identifier
}) {
    const [selectedSet, setSelectedSet] = useState([]);
    const [start, setStart] = useState(false);
  
    async function handleSubmit(event){
        event.preventDefault();
        if(oldCollectionClick){
            const value = await collectionId;
            setSelectedSet((previous)=>[...previous, value])
            handleClick_oldCollection()
        }
    }
    function handleStartBtn(){
        if(start){
            setStart(false)
        }else{
            setStart(true)
        }
    }
    
    return (
        <>
        {(start && identifier==='Study') &&
        <FlashQuiz
        selectedSet={selectedSet}
        collectionList={collectionList}
        flashcardCollection={flashcardCollection}
        ></FlashQuiz>}
        {!start && (<div className="questionnaire">
            <form onSubmit={handleSubmit}>
                <div className="form_layout">
                    <div>
                    <div className="dropdownBtn">
                    <DropDownMenu 
                collectionList={collectionList}
                oldCollectionClick={oldCollectionClick}
                handleClick_oldCollection={handleClick_oldCollection}
                handleDropDown_addId={handleDropDown_addId}
                name="Select Collections"
                ></DropDownMenu>
                    </div>
               <button className="startBtn" onClick={handleStartBtn}>Start</button>                           
                    </div>            
                </div>
            </form>
            <div className="selections">
                <div>
                    <label className='Selected'>Selections</label>
                        <ul >
                        {selectedSet.map((value)=>{
                            let temp;
                            collectionList.map((x)=>{
                                if(x._id==value){
                                    temp = x.collection_name;
                                }
                                return temp
                            })
                            return (
                                <li key={value._id}>
                                    {temp}
                                </li>
                            )
                        })}
                      
                    </ul>
                </div>
            </div>
        </div>)}
        </>       
    );
}