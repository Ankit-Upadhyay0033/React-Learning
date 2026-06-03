import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    <>
      <div className={style.container}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            TodoName={item.name}
            TodoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
