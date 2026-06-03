import style from "./AddTodo.module.css";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

function Addtodo() {
  const { addNewItem } = useContext(todoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfClicks.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfClicks.current}`);
  // };

  const handleAddButtinClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    todoNameElement.current.value = "";
    const todoDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };

  return (
    <div className="row">
      <form action="" className="row" onSubmit={handleAddButtinClick}>
        <div className="col-6">
          <input
            className={style.input}
            ref={todoNameElement}
            type="text"
            name=""
            id=""
            placeholder="Enter todo here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={style.input}
            ref={todoDateElement}
            type="date"
            name=""
            id=""
            // onChange={handleDateChange}
            // value={todoDate}
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
