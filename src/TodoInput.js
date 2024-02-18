import React, { useState } from 'react'
import TodoList from './TodoList'

function TodoInput(props){

const [todoList,setToDoList]=useState([])

    const[inputText, setInputText]=useState([])

const handleChange = (e)=>{

 setInputText(e.target.value)
 console.log("ggggggggggggggggggggggggg")

}
console.log(">>>:",inputText)

    // const handleEnterPress=(e)=>{

    // //     if(e.keycode ===369) 

    // //     props.addList (inputText)
        
    // //  setInputText(e.target.value)
     
    // //  console.log(e.target.value)

    // //  const handleSubmit=(data)=>{

    // //     console.log(data)
    // //  }
    // }

    // const handleClick=()=>{

    // }
    // const parentPassData=()=>{
    //     AccesssChildData(inputText)
    // }

    const handleClick=()=>{
setToDoList([...todoList,inputText])
setInputText("")
    }

    return(
        <div className='input-container'>
        <input 
        type="text"

        className='input-box-todo'
        placeholder='Enter your todo'
        value={inputText}
        onChange={handleChange}/>
        
        <button onClick={handleClick } className ='add-button'>+</button>
       
        <TodoList todoList={todoList}/>
        </div>
    )
    }

    export default TodoInput;
