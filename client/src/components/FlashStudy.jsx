import { useState } from 'react';
import './CSS/FlashStudy.css';
import FlashQuiz from './FlashQuiz';
import DropDownMenu from './DropDownMenu';
import Manual_Auto_Btn from './buttons/Manual_Auto_Btn';
import FlashTest from './FlashTest';

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
    const [manual, setManual] = useState(false);
    const [auto, setAuto] = useState(false);
    const [start, setStart] = useState(false);
  
    async function handleSubmit(event){
        event.preventDefault();
        if(oldCollectionClick){
            const value = await collectionId;
            setSelectedSet((previous)=>[...previous, value])
            handleClick_oldCollection()
        }
    }
    function handleAuto(){
        setAuto(true)
        setManual(false)
    }
    function handleManual(){
        setAuto(false)
        setManual(true)
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
        handleAuto={handleAuto}
        handleManual={handleManual}
        collectionList={collectionList}
        flashcardCollection={flashcardCollection}
        ></FlashQuiz>}
        {(start && identifier==='Test') && 
        <FlashTest
        selectedSet={selectedSet}
        handleAuto={handleAuto}
        handleManual={handleManual}
        collectionList={collectionList}
        flashcardCollection={flashcardCollection}
        ></FlashTest>}
        {!start && (<div className="questionnaire">
            <form onSubmit={handleSubmit}>
                <div className="form_layout">
                    <div>
                    <DropDownMenu 
                collectionList={collectionList}
                oldCollectionClick={oldCollectionClick}
                handleClick_oldCollection={handleClick_oldCollection}
                handleDropDown_addId={handleDropDown_addId}
                name="Select Collections"
                ></DropDownMenu>
               <button className="startBtn" onClick={handleStartBtn}>Start</button>   

                    </div>
                             
               <div className="manual_auto">
               <Manual_Auto_Btn
               handleAuto={handleAuto}
               handleManual={handleManual}
               ></Manual_Auto_Btn>
               </div>
                </div>
            </form>
            <div className="selections">
                <div>
                    <p>Selected:</p>
                        <ul>
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
                <div>
                    <p>Selected: </p>
                    {manual && (<p> manual</p>)}
                    {auto && (<p>  auto</p>)}                    
                </div>
            </div>
        </div>)}
        
        
        </>
       
    );
}