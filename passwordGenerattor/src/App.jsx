import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [password, setPassword] = useState("")
  let [numberAllowed, setnumberAllowed] = useState("false")
  let [charAllowed, setcharAllowed] = useState("false")
  let [length, setLength] = useState(8)

  const passwordGeneratoe= useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*-_+=[]{}~"
    }

    for (let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomIndex)
    }

    setPassword(pass);

  },[length,charAllowed,numberAllowed])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordRef = useRef(null)

  useEffect(()=>{
    passwordGeneratoe()
  },[length, numberAllowed, charAllowed])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
      />
      <button
     onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
            setnumberAllowed((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
                setcharAllowed((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default App
