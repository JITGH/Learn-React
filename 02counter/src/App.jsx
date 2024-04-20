
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter,setcounter]=useState(5)
  //let counter =5
  const addvalue=()=>{
    //console.log("value added",Math.random());
   
    //counter=counter+1
    if(counter<20){
    setcounter(counter + 1)
    console.log("clicked",counter);
    }
    else{
      console.log("Limit Exceed");
    }
  }
  const removevalue=()=>{
    if(counter>0){
   setcounter(counter-1)
    console.log("clicked",counter);
    }else{
      console.log("Negative Number not support");
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}>Add value  {counter}</button>
      <br/>
      <button
      onClick={removevalue}>Remobe value  {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
