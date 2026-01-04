import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 5;
  const addValue = ()=>{
    
    setCounter(counter +1)
  }
  const removeValue = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Din or padhai</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value </button>
    </>
  )
}

export default App
