import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ items, onDeleteClick }) => {
  return (
    <>
      <div className={style.container}>
        {items.map((item) => (
          <TodoItem
            TodoName={item.name}
            TodoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
