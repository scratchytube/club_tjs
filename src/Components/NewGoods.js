import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

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
        <div className="d-flex justify-content-center mt-3 ">
            <form onSubmit={handleGoodsSubmit} autoComplete="off">
                <Form.Group>
                
                {/* <label htmlFor="name">Name</label> */}
                <input 
                placeholder="Tell us the name!"
                className="form-control mb-4"
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                {/* {name.length === 0 ? (<p style={{ color: "red"}}>Cmon son give me a name</p>) : null} */}

                {/* <label htmlFor="image">Upload an image puhlease</label> */}
                <input
                className="form-control"
                placeholder="We need an image!"
                type="img"
                id="img"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                {image.length === 0 ? (<p style={{ color: "red" }}>We need an image!</p>) : null}

                <button 
                disabled={!image}
                type="submit">Submit this new ish</button>
                </Form.Group>
            </form>
        </div>
    )
}

export default NewGoods