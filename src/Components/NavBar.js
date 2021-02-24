import React from 'react' 
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar" >
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/goods">
                New Items!
            </NavLink>
            <NavLink to="/recipes">
                Recipes
            </NavLink>
            <NavLink to="/stores">
                TJ Stores
            </NavLink>
            <NavLink to="resources">
                Links/Fun Resources
            </NavLink>
            <NavLink to="profile">
                My Profile
            </NavLink>
            <button>LogIn/SignUp</button>
        </div>
    )
}

export default NavBar