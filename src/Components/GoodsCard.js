import React from 'react'

const GoodsCard = ({ oneGood }) => {
    const { name, image, likes} = oneGood
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <button>{likes}</button>
            <button>Add to my Favorites</button>
        </div>
    )
}

export default GoodsCard