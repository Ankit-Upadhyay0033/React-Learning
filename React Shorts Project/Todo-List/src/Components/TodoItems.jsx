import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ items }) => {
  return (
    <>
      <div className={style.container}>
        {items.map((item) => (
          <TodoItem TodoName={item.name} TodoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
