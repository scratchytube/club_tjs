import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment, deleteFavGood } from '../Components/redux/fav_good'

const ProfileFavoriteGoods = ({ item }) => {
    const { name, image, likes, note } = item.good
    const { id } = item
    const [comment, setComment] = useState("")
    const [showComment, setShowComment] = useState(false)
    const [toggleCommentField, setToggleCommentField] = useState(true)
    const dispatch = useDispatch()

    console.log(item)

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
            body: JSON.stringify({ note: comment })
        })
        .then((r) => r.json())
        .then(updatedObject => {
            dispatch(addComment(updatedObject))
        })
        setShowComment((showComment) => !showComment)
    }

    const toggleField = () => {
        setToggleCommentField((toggleField) => !toggleField)
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{likes} cookie Jars</p>
            { showComment ? (<p>{note}</p>) : (null) }
             { toggleCommentField ? 
             <div>
                <form onSubmit={handleEditComment}>
                    <textarea name="comment" placeholder={comment} value={comment} onChange={(e) => setComment(e.target.value)} />
                </form>
                <button name="submit" type="submit" onClick={handleEditComment}>save</button>
            </div>
            : null}
            <button onClick={toggleField} >{ toggleCommentField ? "Eh nevermind" : "Note to Self" }</button>
            <button onClick={handleRemoveFavoriteItem} >Remove from favs</button>
        </div>
    )
}

export default ProfileFavoriteGoods