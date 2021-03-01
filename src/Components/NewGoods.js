import React, { useState } from 'react'

const NewGoods = ({ handleToggleForm, onHandleNewGood }) => {
    
    const [image, setImage] = useState('')
    const [name, setName] = useState('')

    const handleGoodsSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: name,
            image: image,
            likes: 0,
        }

        fetch('http://localhost:3000/api/v1/goods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
            onHandleNewGood(data);
            })
            handleToggleForm(false)
            setImage("")
            setName("")
                }

    return (
        <div>
            <h2>put some new goodies here</h2>
            <form onSubmit={handleGoodsSubmit} autoComplete="off">
                
                <label htmlFor="name">Name</label>
                <input 
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                {name.length === 0 ? (<p style={{ color: "red"}}>Cmon son give me a name</p>) : null}

                <label htmlFor="image">Upload an image puhlease</label>
                <input
                type="img"
                id="img"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                {image.length === 0 ? (<p style={{ color: "red" }}>Cmon bruh bruh add an image</p>) : null}

                <button 
                disabled={!image}
                type="submit">Submit this new ish</button>

            </form>
        </div>
    )
}

export default NewGoods