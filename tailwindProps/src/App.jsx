import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card name="taha" eat="potti"/>
    </>
  )
}

export default App
