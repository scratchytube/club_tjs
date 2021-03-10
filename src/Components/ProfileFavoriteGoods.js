import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment, deleteFavGood } from '../Components/redux/fav_good'
// BootStrap 
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProfileFavoriteGoods = ({ item }) => {
    const { name, image, likes } = item.good
    const { id, note } = item
    const [comment, setComment] = useState("")
    const [toggleCommentField, setToggleCommentField] = useState(false)
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
        setToggleCommentField((toggleField) => !toggleField)
    }

    const toggleField = () => {
        setToggleCommentField((toggleField) => !toggleField)
    }

    return (
        <Col className="col-md-6 mt-5">
            
                <Card>
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <p>{likes} cookie Jars</p>
                <p>{note}</p> 
                { toggleCommentField ? 
                <div>
                    <form onSubmit={handleEditComment}>
                        <textarea name="comment" placeholder={comment} value={comment} onChange={(e) => setComment(e.target.value)} />
                    </form>
                    <button name="saveButton" type="submit" onClick={handleEditComment}>save</button>
                </div>
                : null}
                <Button onClick={toggleField} >{ toggleCommentField ? "Eh nevermind" : "Note to Self" }</Button>
                <Button onClick={handleRemoveFavoriteItem} >Remove from favs</Button>
                </Card>
            
        </Col>
    )
}

export default ProfileFavoriteGoods