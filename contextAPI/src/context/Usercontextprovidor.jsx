import React from "react";
import usercontext from "./usercontext";

const UserContextProvidor=({children})=>{
    const [users,setUser]=React.useState()

    return (
        <usercontext.Provider value={{users,setUser}}>
            {children}
        </usercontext.Provider>
    )
}

export default UserContextProvidor