import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0);
  let incrementCounter=()=>{
    if(counter>=20){
      setcounter(20);
    }
    else{
    setcounter(counter+1);
    }
  }

  let decrementCounter=()=>{
    if(counter<=0){
      setcounter(0);
    }else{
    setcounter(counter-1);
    }
  }

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={incrementCounter}>click me{counter}</button>
      <button onClick={decrementCounter}>click me{counter}</button>
    </>
  )
}

export default App
