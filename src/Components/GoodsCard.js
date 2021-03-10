import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavGoods } from '../Components/redux/fav_good'
import { addLike } from '../Components/redux/good'
// Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

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
        <Col className="col-md-4">
            <Card>
                <Card.Img variant="top" style={{ maxWidth: "30vw", maxHeight: "35vh" }} src={image} alt={name} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                { user ? <Button onClick={handleLikesClick} className="far fa-heart" variant="outline-danger">{likes}</Button> : null }
                { user ? <Button onClick={() => handleAddFavorites(oneGood)} variant="outline-danger" >Add to my Favorites</Button> : null}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default GoodsCard