import style from "./Item.module.css";

const Item = ({ foodItems, active, handleBtn }) => {
  // const handleBtn = (foodItems) => {
  //   console.log(`item being clicke ${foodItems}`);
  // };

  // let { foodItems } = props;
  return (
    <li className={`${style.Item} list-group-item ${active && "active"}`}>
      <span className={style["Span"]}>{foodItems} </span>
      <button onClick={handleBtn} className={`${style.btn} btn btn-info`}>
        Buy
      </button>
    </li>
  );
};
export default Item;
