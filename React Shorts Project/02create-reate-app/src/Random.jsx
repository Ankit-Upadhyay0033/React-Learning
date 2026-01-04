function RandomCard() {
  let number = Math.random() * 13;

  return <h1>Random number is : {number}</h1>;
}
export default RandomCard;
