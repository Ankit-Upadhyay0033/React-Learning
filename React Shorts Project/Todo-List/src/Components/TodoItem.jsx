import { MdDelete } from "react-icons/md";

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <>
      <div className="row  ">
        <div className="col-6  ">{TodoName}</div>
        <div className="col-4  ">{TodoDate}</div>
        <div className="col-2  ">
          <button
            type="button"
            className="btn btnr btn-danger"
            onClick={() => onDeleteClick(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
