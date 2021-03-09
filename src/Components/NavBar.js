import React from 'react' 
import { NavLink, Link } from 'react-router-dom'

import './NavBar.css'


const NavBar = ({ user }) => {

    return (
        <header>
            <div className="navbar bg-light navbar-light navbar-expand-lg" >
                <Link to="/" className="navbar-brand">
                    <h3>Club Trader Joe's</h3>
                </Link>
            <div className="container">
                <NavLink to="/" className="nav-item">
                    Home
                </NavLink>
                <NavLink to="/goods" className="nav-item">
                    New Items!
                </NavLink>
                <NavLink to="/recipes" className="nav-item">
                    Recipes
                </NavLink>
                <NavLink to="/stores" className="nav-item">
                    TJ Stores
                </NavLink>
                <NavLink to="/resources" className="nav-item">
                    Links/Fun Resources
                </NavLink>
                <div>
                    {user ? (
                        <NavLink to="profile" className="nav-item">
                        My Profile
                    </NavLink>
                    ) : (
                        <NavLink to="/auth" className="nav-item">
                    Login/Signup
                </NavLink>
                    ) }
                </div>
                
                </div>
            </div>
        </header>
    )
}

export default NavBar