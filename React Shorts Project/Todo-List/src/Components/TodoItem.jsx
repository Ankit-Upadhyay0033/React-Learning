import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ TodoName, TodoDate }) {
  const { deleteItem } = useContext(todoItemsContext);

  return (
    <>
      <div className="row  ">
        <div className="col-6  ">{TodoName}</div>
        <div className="col-4  ">{TodoDate}</div>
        <div className="col-2  ">
          <button
            type="button"
            className="btn btnr btn-danger"
            onClick={() => deleteItem(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
