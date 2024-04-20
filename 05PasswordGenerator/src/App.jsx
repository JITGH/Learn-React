import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllow,setcharAllow]=useState(false);
  const[password,setpassword]=useState("")
  //ref hook
const passwordRef=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllow) str+="!@#$%^&*-+?_~`"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllow,setpassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,charAllow,setpassword])

const copyPasswordToClipboaed=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,50)
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  content-center bg-gray-800 text-orange-500'>
        <h2 className='text-white text-center my-3'>Password Generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 justify-center'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}

          />
          <button onClick={copyPasswordToClipboaed} className='outline-none bg-blue-700 text-white px-3 py-0.5shrink-0'>copy</button>


        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={40}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}

                  />
                  <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
            id="numberInput"
            
            onChange={()=>{setnumberAllowed((prev)=>!prev)}}

                  />
                  <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllow}
            id="charInput"
            
            onChange={()=>{setcharAllow((prev)=>!prev)}}

                  />
                  <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        </div>

    </>
  )
}

export default App
