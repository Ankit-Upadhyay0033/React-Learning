import React, { useState } from "react";
import TodoName from "./Components/TodoName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItem) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItem);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container container">
        <TodoName />
        <Addtodo oneNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems items={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
