import style from "./App.module.css";
import "./App.css";
import Display from "./Components/Display";
import Btn from "./Components/Btn";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  return (
    <>
      <div id={style.calculater}>
        <Display displayValue={calVal} />
        <Btn onButtonClick={() => console.log("btn clicked")} />
      </div>
    </>
  );
}

export default App;
