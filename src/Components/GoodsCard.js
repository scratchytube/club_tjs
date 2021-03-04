import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavGoods } from '../Components/redux/fav_good'
import { addLike } from '../Components/redux/good'

const GoodsCard = ({ oneGood, user }) => {
    const { id, name, image, likes} = oneGood
    const dispatch = useDispatch()
    const favGoods = useSelector((state) => state.favGoods.goods)

    const callbackFunctionForFavorite = newFavorite => {
        const newFavoriteGoodsArray = [newFavorite, ...favGoods]
        dispatch(addFavGoods(newFavoriteGoodsArray))
    }
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
            callbackFunctionForFavorite(anotherFavorite);
            })
    }   

    const handleLikesClick = () => {
        const updatedLikes = {
            likes: oneGood.likes + 1
        }

        fetch(`http://localhost:3000/api/v1/goods/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedLikes)
            })
            .then((r) => r.json())
            .then(updatedObject => {
                dispatch(addLike(updatedObject))
            })
        }

    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            { user ? <button onClick={handleLikesClick}>{likes}</button> : null }
            { user ? <button onClick={() => handleAddFavorites(oneGood)} >Add to my Favorites</button> : null}
        </div>
    )
}

export default GoodsCard