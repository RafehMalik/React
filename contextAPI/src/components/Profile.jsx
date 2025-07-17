import React, {useContext} from 'react'
import userContext from '../context/usercontext'

function Profile() {
    const {users} = useContext(userContext)
    
    if (!users) return <div>please login</div>

    return <div>Welcome {users.username}</div>
}

export default Profile