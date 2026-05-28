import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ items }) => {
  return (
    <>
      <div className={style.container}>
        {items.map((item, index) => (
          <TodoItem key={index} TodoName={item.name} TodoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
