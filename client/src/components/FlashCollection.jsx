import './CSS/FlashCollection.css';

export default function FlashCollection({ flashcardCollection, collectionList }){    
    return (
        <>        
        <div className="all_display">
        <div className="collections_yard">
            <div className="individual_collection_set">
                {collectionList.map((value)=>{
                    return (
                        <button key={value._id}> {value.collection_name}</button>  
                    )
                })}                
            </div>           
        </div>
        <div className="collections_yard">
        <div className="individual_flash_set">
                {flashcardCollection.map((value) => {
                    return (
                        <button key={value._id} className="flashcard_solo"> 
                            {value.question}</button>  
                    )
                })}
            </div>           
        </div>
        </div>
        </>
    );
}