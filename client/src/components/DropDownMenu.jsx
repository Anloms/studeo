'use strict'
import './CSS/DropDown.css'
export default function DropDownMenu({
    collectionList, 
    handleDropDown_addId, 
    handleClickExistingCollection_Btn, 
    name,
    handleClick_oldCollection
}){

    return (
        <div className='dropdown'>
            <button className='dropbtn' onClick={handleClickExistingCollection_Btn}>{name}</button>
            <div className='dropdown-content'>
                <ul>
                    {collectionList.map((value)=>{
                        
                        return (
                        <li key={value._id}>
                            <button  type='submit' className='collectionItem_btn' onClick={()=>{
                                handleDropDown_addId(value._id);
                                handleClick_oldCollection();
                                }}>
                            {value.collection_name}
                            </button>
                        </li>
                        )
                    })}
                    </ul>
            </div>
        </div>
    )
}
