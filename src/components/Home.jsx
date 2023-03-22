import React, { useState,useEffect } from "react";
import { List } from "./list/List";

export const Home = () => {
  const [input, setInput] = useState("");
  
  if(!JSON.parse(localStorage.getItem('items'))){
    var local = [];
  }else{
    var local = JSON.parse(localStorage.getItem('items'));
   }
  var [todos, setTodos] = useState(local);
  

  useEffect(()=>{
    if(!localStorage.getItem('items')){
        var items= localStorage.setItem('items', JSON.stringify([]));
    }
    else{
        var items= localStorage.setItem('items', JSON.stringify(todos ));
    }
    if (items) {
        setTodos(items);
       }
  },[todos])

  console.log(todos)
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        input={input}
        setTodos={setTodos}
      />
      <button
        onClick={(e) => {
          setTodos([...todos,[Math.random(),input]]);
        }}
      >
        Add
      </button>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
};
