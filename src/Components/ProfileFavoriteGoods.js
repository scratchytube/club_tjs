import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavGood } from '../Components/redux/fav_good'

const ProfileFavoriteGoods = ({ item }) => {
    const { name, image, likes } = item.good
    const { id } = item
    const [comment, setComment] = useState("")
    const [showComment, setShowComment] = useState(false)
    const dispatch = useDispatch()

    const handleRemoveFavoriteItem = () => {
        fetch(`http://localhost:3000/api/v1/fav_goods/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((item) => {
            dispatch(deleteFavGood(item))
        })
    }

    const handleEditComment = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/fav_goods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ comment: comment })
        })
        setShowComment((showComment) => !showComment)




    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{likes} cookie Jars</p>
            { showComment ? (<p>{comment}</p>) : (null) }
            { showComment ? 
                <form>
                <textarea name="comment" placeholder="Note to Self" value={comment} onChange={(e) => setComment(e.target.value)} />
            </form> : null }
            <button onClick={handleEditComment} >Add a little note to self</button>
            <button onClick={handleRemoveFavoriteItem} >Remove from favs</button>
        </div>
    )
}

export default ProfileFavoriteGoods