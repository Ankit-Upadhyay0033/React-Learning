import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            handleBtn={() => console.log(`${item} clicked`)}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
