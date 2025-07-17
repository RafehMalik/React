import { useState } from 'react'
import Usercontextprovidor from './context/Usercontextprovidor'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <Usercontextprovidor>
      <Login/>
      <Profile/>
    </Usercontextprovidor>
  )
}

export default App
