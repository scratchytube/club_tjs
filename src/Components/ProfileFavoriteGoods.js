import React from 'react'


const ProfileFavoriteGoods = ({ item, onDeleteFavItem }) => {
    const { id, name, image, likes } = item

    const handleRemoveFavoriteItem = () => {
        fetch(`http://localhost:3000/api/v1/fav_goods/${id}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onDeleteFavItem(item)
        })
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <button>{likes}</button>
            <button>Add a little note to self</button>
            <button onClick={handleRemoveFavoriteItem} >Remove from favs</button>
        </div>
    )
}

export default ProfileFavoriteGoods