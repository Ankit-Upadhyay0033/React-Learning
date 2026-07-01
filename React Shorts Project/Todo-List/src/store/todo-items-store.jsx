import { createContext } from "react";
import { useReducer } from "react";

export const todoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItem, action) => {
  let newTodoItem = currentTodoItem;

  if (action.type === "New_ITEM") {
    newTodoItem = [
      ...currentTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currentTodoItem.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  //const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "New_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };
  //   setTodoItems((currVal) => [
  //     ...currVal,
  //     { name: itemName, dueDate: itemDueDate },
  //   ]);
  // };

  // const deleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItem);
  //   setTodoItems(newTodoItems);
  // };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <todoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
