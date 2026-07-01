// import React, { useState, useReducer } from "react";
import TodoName from "./Components/TodoName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";
// import { todoItemsContext } from "./store/todo-items-store";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container container">
        <TodoName />
        <Addtodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
