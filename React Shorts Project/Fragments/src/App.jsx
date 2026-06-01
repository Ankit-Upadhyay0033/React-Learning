import "./App.css";
import FoodItems from "./Components/Fooditem";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container ";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["dal", "Green Vegetable", "Roti", "Salad", "Milk", "Gee"];

  // let textStateArr = useState("Food Item enterd by user");
  // let textShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // if (foodItems.length === 0) {
  //   return <h2>I am still hungry</h2>;
  // }

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  const colorChanger = (e) => {
    console.log(e);
  };

  return (
    <>
      <Container>
        <h1 className="Food-Heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown} />
        <ErrorMsg items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
