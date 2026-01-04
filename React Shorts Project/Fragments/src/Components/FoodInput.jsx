import style from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  //   const handleOnChange = (e) => {
  //     console.log(e.target.value);
  //   };

  return (
    <input
      onKeyDown={handleOnKeyDown}
      className={style.input}
      placeholder="Enter your Food Item"
      type="text"
      name=""
      id=""
    />
  );
};
export default FoodInput;
