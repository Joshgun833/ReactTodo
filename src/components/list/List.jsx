import React, { useState } from "react";

export const List = ({ todos, setTodos}) => {
  function handleDel(par) {
    return setTodos(todos.filter((filterOlan) => filterOlan[0] !== par));
  }

  return (
    <div>
      {

    //    (()=>{
    //             for (const key in todos) {
            
    //             const element = todos[key];
    //             console.log(element);
    //         return     <p>
    //             <span >{todos[key][1]}</span> 
    //             <button  onClick={()=>handleDel(todos[key])}>del</button>
    //         </p>
            
    //     }
    //    })
       
         
      
        todos.map((e)=>{
            
            return <p>
                <span >{e[1]}</span> 
                <button  onClick={()=>handleDel(e[0])}>del</button>
            </p>
            
        })
         } 
      
    </div>
  );
};
