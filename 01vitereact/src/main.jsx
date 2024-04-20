import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function MyApp(){
  return(
    <div>
    <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement= {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement=(
  <a href="http://google.com" target='_blank'>visit google</a>
)
const another=" & chai and coffe with Jit"

const ReactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target: '_blank'
  },'click me for gooogle.',another
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    
  ReactElement
    
  
)
