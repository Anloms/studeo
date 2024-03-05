import { useDrag, useDrop } from 'react-dnd';
import './CSS/FlashCollection.css';

export default function FlashCollection({ 
    flashcardCollection, 
    collectionList,
    handleCollectionUpdate
 }){
    return (
        <>        
        <div className="all_display">
        <div className="collections_yard_flash">
            <div className="individual_collection_set">
                {collectionList.map((value)=>{
                    const [{ isOver }, drop] = useDrop(() => ({
                        accept: 'box',
                        drop: (item) => {
                            console.log('Dropped item:', item);
                            handleCollectionUpdate(item.id, value._id)
                          },
                        collect: (monitor) => ({
                          isOver: monitor.isOver(),
                          canDrop: monitor.canDrop()
                        })
                      }))
                    return (
                        <button 
                        key={value._id}
                        ref={drop}
                        role={'Dustbin'}
                        style={{ backgroundColor: isOver ? 'orange' : 'white' }}
                        > {value.collection_name}
                        </button>  
                    )
                })}                
            </div>           
        </div>
        <div className="collections_yard_colle">
        <div className="individual_flash_set">
                {flashcardCollection.map((value) => {
                    const [{ isDragging }, drag] = useDrag(() => ({
                        type: 'box',
                        item: { id: value._id, type: 'flashcard' },
                        collect: monitor => ({
                          isDragging: !!monitor.isDragging(),
                        }),
                      }));
                    return (
                        <button
                         key={value._id}
                         className="flashcard_solo"
                         role="Handle"
                         ref={drag}
                         style={{cursor: isDragging ? 'grabbing' : 'grab',opacity: isDragging ? 0.5 : 1 }}
                         >
                            {value.question}</button>  
                    )
                })}
            </div>           
        </div>
        </div>
        </>
    );
}