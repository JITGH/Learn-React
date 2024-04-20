import { useState } from "react"


function App() {
 const [color,setcolor]=useState("#007FFF")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
           <button
            onClick={()=>setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>
           <button
           onClick={()=>setcolor("blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
           <button 
           onClick={()=>setcolor("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>

          <button 
           onClick={()=>setcolor("#9e1b32")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#9e1b32"}}>Alabama Crimson</button>

          <button 
           onClick={()=>setcolor("#720e9e")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#720e9e"}}>Yahoo purple</button>


          <button 
           onClick={()=>setcolor("#018749")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#018749"}}>Celtic Fc Green</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
