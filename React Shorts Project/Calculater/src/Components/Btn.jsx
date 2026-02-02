import style from "./Btn.module.css";

const Btn = ({ onButtonClick }) => {
  const btnName = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  return (
    <div className={style.btnContainer}>
      {btnName.map((btnName) => (
        <button className={style.btn} onClick={() => onButtonClick(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
};
export default Btn;
