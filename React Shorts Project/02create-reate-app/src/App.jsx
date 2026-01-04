import { useState } from 'react'
import './App.css'
import BTN from './Btn.jsx'
import RandomCard from './Random.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Ankit</h1>
      <BTN/>
      <RandomCard/>
      <RandomCard/>

    </>
  )
}

export default App
