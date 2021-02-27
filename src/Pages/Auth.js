import React from 'react'
import LogIn from '../Components/LogIn'
import SignUp from '../Components/SignUp'

const Auth = ({ setUser }) => {
    return (
        <div>
            <h2>its auth (fake) time</h2>
            <LogIn setUser={setUser} />
            <SignUp />
        </div>
    )
}

export default Auth