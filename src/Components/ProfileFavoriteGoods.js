import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavGood } from '../Components/redux/fav_good'

const ProfileFavoriteGoods = ({ item }) => {
    const { name, image, likes } = item.good
    const { id } = item
    const dispatch = useDispatch()

    const handleRemoveFavoriteItem = () => {
        fetch(`http://localhost:3000/api/v1/fav_goods/${id}`,{
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((item) => {
            dispatch(deleteFavGood(item))
            console.log(item)
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