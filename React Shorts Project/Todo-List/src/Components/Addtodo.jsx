import style from "./AddTodo.module.css";
import { useState } from "react";

function Addtodo({ oneNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtinClick = () => {
    oneNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          className={style.input}
          type="text"
          name=""
          id=""
          placeholder="Enter todo here"
          onChange={handleNameChange}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input
          className={style.input}
          type="date"
          name=""
          id=""
          onChange={handleDateChange}
          value={todoDate}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btnr btn-success"
          onClick={handleAddButtinClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
