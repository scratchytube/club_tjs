import React from 'react'

const GoodsFavoriteCard = ({ favoriteItem }) => {
    const { image } = favoriteItem.good 
    const { id } = favoriteItem

    
    return (
        <div>
            <img src={image} alt="favimg" />
            <button>Eh, remove</button>
        </div>
    )
}

export default GoodsFavoriteCard