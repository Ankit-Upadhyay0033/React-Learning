import style from "./App.module.css";
import "./App.css";
import Display from "./Components/Display";
import Btn from "./Components/Btn";

function App() {
  return (
    <>
      <div id={style.calculater}>
        <Display />
        <Btn />
      </div>
    </>
  );
}

export default App;
