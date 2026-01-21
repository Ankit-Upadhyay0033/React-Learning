import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItem, setActiveItem] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            active={activeItem.includes(item)}
            handleBtn={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
