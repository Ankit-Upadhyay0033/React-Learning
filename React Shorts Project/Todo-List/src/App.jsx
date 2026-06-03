// import React, { useState, useReducer } from "react";
import TodoName from "./Components/TodoName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";
// import { todoItemsContext } from "./store/todo-items-store";
// import todoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <todoItemsContextProvider>
      <center className="todo-container container">
        <TodoName />
        <Addtodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </todoItemsContextProvider>
  );
}

export default App;
