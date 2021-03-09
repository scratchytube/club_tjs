import React from 'react'
import NavBar from './NavBar'

const Header = ({ user }) => {
    return (
        <div className="header">
            <NavBar user={user} />
        </div>
    )
}

export default Header