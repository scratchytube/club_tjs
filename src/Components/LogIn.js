import React, { useState } from 'react' 

const LogIn = ({ setUser }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST"
        })
        .then((r) => r.json())
        .then(user => {
            setUser(user)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <label>UserName</label>
                <input 
                type="text"
                name="username"
                autoComplete="off"
                value={formData.username}
                onChange={handleChange}
                />
                <label>Password</label>
                <input 
                type="password"
                name="password"
                value={formData.password}
                autoComplete="current-password"
                onChange={handleChange}
                />
                <input 
                type="submit"
                value="Login"
                />
            </form>
        </div>
    )
}

export default LogIn