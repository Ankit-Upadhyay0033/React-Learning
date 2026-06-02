import style from "./AddTodo.module.css";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function Addtodo({ oneNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtinClick = (event) => {
    event.preventDefault();
    oneNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="row">
      <form action="" className="row" onSubmit={handleAddButtinClick}>
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
          <button type="submit" className="btn btnr btn-success">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
