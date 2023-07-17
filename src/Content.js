import React from 'react'

import { FaRegTrashAlt } from "react-icons/fa";


const Content = ({items,handleCheck,deleteEvent}) => {

  return (
    <div className='maincontent'>
    {(items.length)?(
        <ul >
       {items.map((items)=>(

<li key={items.id} >
<input type="checkbox"
       checked={items.checked}
       onChange={()=>handleCheck(items.id)}
       />
       <label 
       style={(items.checked?{textDecoration:'line-through'}:null)}
       >{items.item}</label>
       <FaRegTrashAlt role="button" onClick={() => deleteEvent(items.id)} />

</li>       
         
   ) )}
               </ul>):
               <h4>YOUR LIST EMPTY</h4>}
    </div>
  )
}

export default Content