import React from 'react'

const GoodsCard = ({ oneGood, user }) => {
    const { name, image, likes} = oneGood

    const handleAddFavorites = (good) => {
        const formData = {
            good_id: good.id,
            user_id: user.id,
            note: "",
        }

        fetch('http://localhost:3000/api/v1/fav_goods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(anotherFavorite => {
        console.log('Success:', anotherFavorite);
        })
    }   
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            { user ? <button>{likes}</button> : null }
            { user ? <button onClick={() => handleAddFavorites(oneGood)} >Add to my Favorites</button> : null}
        </div>
    )
}

export default GoodsCard