
import './App.css';
import Content from './Content';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Input from './Input';
import { useState } from 'react'
import Footer from './Footer';
function App() {

  const[items,setItems]=useState(
    [
        {
            id:1,
            checked:true,
            item:"hello world"
        },
        {
            id:2,
            checked:false,
            item:"REACT APP"
        },
        {
            id:3,
            checked:true,
            item:"MY PROJECT"
        }
   ]
);
const handleCheck=(id)=>{
    const listItems=items.map((item)=>
    item.id===id?{...item,checked:!item.checked}:item
    )
    setItems(listItems)

}
const deleteEvent=(id)=>{
       const listItems=items.filter((item)=>
       item.id!==id
       )
    setItems(listItems)

}

const [newItem,setNewItem]=useState(' ') 
const addEvent=(e)=>{
  e.preventDefault()
  addItem(newItem)
  setNewItem('')
     
}
const addItem=(item)=>{
  const id=items.length?items[items.length-1].id+1:1
  const addnewItem={id,checked:false,item}
  const listItems=[...items,addnewItem]
  setItems(listItems)
}

  return (
    <div>
    <Header />
    
     <Input addEvent={addEvent}
            newItem={newItem}
            setNewItem={setNewItem} />
     <Content  className='content' 
     items={items}
     handleCheck={handleCheck}
     deleteEvent={deleteEvent}
     />
     <Footer count={items.length}/></div>
    
    
  );
}

export default App;
