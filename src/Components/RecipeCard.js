import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { addRecipes } from '../Components/redux/fav_recipe'

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
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            {showDirections ? (<p>{directions}</p>) : (null)}
            <button onClick={handleToggleDirections}>{ showDirections ? ("Close Directions") : ("Show me the way!")}</button>
            <button onClick={() => handleAddRecipeFavorite(oneRecipe)} >Add Me To Favorites!</button>
        </div>
    )
}

export default RecipeCard