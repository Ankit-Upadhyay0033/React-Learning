// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';

function App() {

  // let myObj = {
  //   name: "ankit",
  //   age:19,
  // };
  // let arr = [1,2,2];

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 mb-4 rounded-xl'>Tailwind CSS</h1>

      <Card  username = "Chaiorcode" btnText = "click Me" /> 
      <Card  username = "Let's start conding" />
    </>
  );
}

export default App;
