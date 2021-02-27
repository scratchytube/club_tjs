import React from 'react'
import NavBar from './NavBar'

const Header = ({ user }) => {
    return (
        <div className="header">
            <h2>club tj's</h2>
            <NavBar user={user} />
        </div>
    )
}

export default Header