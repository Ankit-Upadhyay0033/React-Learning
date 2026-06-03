import { useContext } from "react";
import styles from "./Welcome.module.css";
import { todoItemsContext } from "../store/todo-items-store";
const WelcomeMsg = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    todoItems.length === 0 && (
      <h2 className={styles.welcome}>Welcome to your Todo List!</h2>
    )
  );
};
export default WelcomeMsg;
