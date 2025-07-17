import { useContext, useState } from "react";
import React from "react";
import context from "../context/usercontext";

function Login(){
    const [username,setusername]=useState()

    const {setUser} = useContext(context)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username})
    }


    return (
        <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setusername(e.target.value) }
        placeholder='username'  />

        {" "}

        {/* <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  /> */}
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}

export default Login