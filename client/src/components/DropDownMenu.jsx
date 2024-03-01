'use strict'
import './CSS/DropDown.css'
export default function DropDownMenu({
    collectionList, 
    handleDropDown_addId, 
    handleClick_drpBtn, 
    name,
    handleClick_oldCollection
}){

    return (
        <div className='dropdown'>
            <button className='dropbtn' onClick={handleClick_drpBtn}>{name}</button>
            <div className='dropdown-content'>
                <ul>
                    {collectionList.map((value)=>{
                        
                        return (
                        <li key={value._id}>
                            <button  type='button' className='collectionItem_btn' onClick={()=>{
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
