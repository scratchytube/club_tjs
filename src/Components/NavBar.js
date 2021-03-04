import React from 'react' 
import { NavLink } from 'react-router-dom'

const NavBar = ({ user }) => {

    return (
        <header>
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
                <div>
                    {user ? (
                        <NavLink to="profile">
                        My Profile
                    </NavLink>
                    ) : (
                        <NavLink to="/auth">
                    Login/Signup
                </NavLink>
                    ) }
                
                
                </div>
            </div>
        </header>
    )
}

export default NavBar