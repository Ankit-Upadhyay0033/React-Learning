import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App </h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: 'https://google.com',
//     target: '_blank',

//   },
//   children: 'click me to visit Google.'
// }



const anotherElement = (
  <a href="https://google.com" target='_blank'>Google Visit</a>
  
)

const anotherUser = " chai or me";

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com',target:'_blank'},
  "click me to visit Google",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root'))
  .render(
     reactElement
    
  )
