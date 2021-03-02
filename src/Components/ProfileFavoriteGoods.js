import React from 'react'


const ProfileFavoriteGoods = ({ item }) => {

    // console.log(item.good.likes)

    return (
        <div>
            <h3>{item.good.name}</h3>
            <img src={item.good.image} alt={item.good.name} />
            <button>{item.good.likes}</button>
            <button>Remove from favs</button>
        </div>
    )
}

export default ProfileFavoriteGoods