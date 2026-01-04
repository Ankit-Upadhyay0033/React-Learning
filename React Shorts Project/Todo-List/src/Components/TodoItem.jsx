function TodoItem({ TodoName, TodoDate }) {
  return (
    <>
      <div className="container">
        <div class="row Row1">
          <div class="col-6">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
