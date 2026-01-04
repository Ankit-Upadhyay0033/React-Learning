import style from "./AddTodo.module.css";

function Addtodo() {
  return (
    <div class="row">
      <div class="col-6">
        <input
          className={style.input}
          type="text"
          name=""
          id=""
          placeholder="Enter todo here"
        />
      </div>
      <div class="col-4">
        <input className={style.input} type="date" name="" id="" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
