import style from "./AddTodo.module.css";

function Addtodo() {
  return (
    <div className="row">
      <div className="col-6">
        <input
          className={style.input}
          type="text"
          name=""
          id=""
          placeholder="Enter todo here"
        />
      </div>
      <div className="col-4">
        <input className={style.input} type="date" name="" id="" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
