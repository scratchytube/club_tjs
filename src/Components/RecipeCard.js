import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { addRecipes } from '../Components/redux/fav_recipe'
// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const RecipeCard = ({ oneRecipe, user }) => {
    const { title, image, ingredients, directions} = oneRecipe
    const [showDirections, setShowDirections] = useState(false)
    const dispatch = useDispatch()
    const favRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

    const handleToggleDirections = () => {
        setShowDirections((showDirections) => !showDirections)
    }

    const callbackFunctionForFavRecipe = (newRecipe) => {
        const brandNewFavRecipeArray = [newRecipe, ...favRecipes]
        dispatch(addRecipes(brandNewFavRecipeArray))
    }

    const handleAddRecipeFavorite = (favRecipe) => {
        const formData = {
            recipe_id: favRecipe.id,
            user_id: user.id,
            note: "",
        }

        fetch('http://localhost:3000/api/v1/fav_recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(newFavRecipe => {
                callbackFunctionForFavRecipe(newFavRecipe);
            })


    }

    return (
        <Col className="col-md-6 mt-5">
            <Card>
                <Card.Header className="text-center">{title}</Card.Header>
                <Card.Img src={image} alt={title} />
            <Card.Text className="text-center">{ingredients}</Card.Text>
            {showDirections ? ( <Card.Text>{directions}</Card.Text>) : (null)}
            <Button variant="outline-danger" onClick={handleToggleDirections}>{ showDirections ? ("Close Directions") : ("Show me the way!")}</Button>
            <Button variant="outline-success" onClick={() => handleAddRecipeFavorite(oneRecipe)} >Add Me To Favorites!</Button>
            </Card>
        </Col>
    )
}

export default RecipeCard