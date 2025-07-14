import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Color, setColor] = useState("black");

  return (
    
      <div className='w-full h-screen ' style={{backgroundColor: Color}}>
        <h1 className='text-2xl text-white'>Background is: {Color}</h1>
        <div className='fixed flex flex-wrap justify-center bottom-10 px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
            <button onClick={()=> setColor("red")} className='outline-none px-3 text-white' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=>setColor("yellow")} className='outline-none px-3 text-white' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> setColor("green")} className='outline-none px-3 text-white' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-3 text-white' style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
