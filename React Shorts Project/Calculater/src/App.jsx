import style from "./App.module.css";
import Display from "./Components/Display";
import Btn from "./Components/Btn";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  //button working concept add
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = evaluate(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div id={style.calculater}>
        <Display displayValue={calVal} />
        <Btn onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
