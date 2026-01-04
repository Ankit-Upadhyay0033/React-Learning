import React from "react";
import TodoName from "./Components/TodoName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const Items = [
    {
      name: "Buy Milk",
      dueDate: "02/01/2026",
    },
    {
      name: "Ghee",
      dueDate: "01/01/2026",
    },
  ];
  return (
    <>
      <center className="todo-container container">
        <TodoName />
        <Addtodo />
        <TodoItems items={Items} />
      </center>
    </>
  );
}

export default App;
