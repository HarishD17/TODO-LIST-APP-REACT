import React from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
const Input = ({newItem,setNewItem,addEvent}) => {
  return (
    <div>
        <form className='inputform' onSubmit={addEvent}>
            <input
            id='additem'
            type='text'
            placeholder='ADD ITEM'
          
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)} 
            />
            <button
            type='submit'><FaRegPlusSquare/></button>
        </form>
    </div>
  ) 
}

export default Input