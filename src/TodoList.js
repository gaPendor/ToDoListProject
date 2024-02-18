import React from 'react';

function TodoList({ todoList }) {
  console.log("todoList>>child>>:", todoList);

  return (
    <div>
      <ul >
        {todoList.map((todo, index) => (
         
          <li style={{border:"1px solid green",borderRedius:"4px",width:"100px", marginBottom:"5px"}} key={index}>{todo}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default TodoList;