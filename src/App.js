import React from 'react'
import "./App.css"
import TodoInput from './TodoInput';
import TodoList from './TodoList'
import { useState } from 'react';
function App() {
  const [listTodo, setListTodo] = useState([]);
 
//   const deleteListItem = (key) => {
//     let newListTodo = [...listTodo];
//     // newListTodo.splice[key,1]
// console.log("newListTodo>>>>>>>>>>:",newListTodo)
//     setListTodo([setListTodo])

//   }
// const AccesssChildData=(inputText)=>{
//   setListTodo([...listTodo, inputText]);
// }
  return (

    <div className='Main-container'>
      <div className='center-container'>
        <TodoInput />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {/* {listTodo.map((listItem, i) => {
        <TodoList key={i} index={i} item = {listItem} delete  />
          {console.log("listItem>>>:",listItem)}
        })} */}

      </div>
    </div>
  )
}
export default App;


