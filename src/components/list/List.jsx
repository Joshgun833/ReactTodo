import React from "react";

export const List = ({ todos, setTodos}) => {
  function handleDel(par) {
    return setTodos(todos.filter((e,i) => i !== par));
  }

  return (
    <div>
      {

      //  (()=>{
      //           for (const key in todos) {
            
      //           const element = todos[key];
      //           console.log(element);
      //       return     <p>
      //           <span >{todos[key][1]}</span> 
      //           <button  onClick={()=>handleDel(todos[key])}>del</button>
      //       </p>
            
      //   }
      //  })()
       
         
      
        todos.map((e,i)=>{
            
            return <p key={i}>{i}
                <span key={i+0.1}>{e}</span> 
                <button key={i+0.2}  onClick={()=>handleDel(i)}>del</button>
            </p>
            
        })
         } 
      
    </div>
  );
};
