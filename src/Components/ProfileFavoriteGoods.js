import React from 'react'


const ProfileFavoriteGoods = ({ item }) => {

    return (
        <div>
            <h3>{item.good.name}</h3>
            <img src={item.good.image} alt={item.good.name} />
            <button>{item.good.likes}</button>
            <button>Add a little note to self</button>
            <button>Remove from favs</button>
        </div>
    )
}

export default ProfileFavoriteGoods