import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavRecipes } from '../Components/redux/fav_recipe'

const ProfileFavoritesRecipes = ({ recipes }) => {
    const { title, image, ingredients, directions } = recipes.recipe
    const { id } = recipes
    const [showDirections, setShowDirections] = useState(false)
    const dispatch = useDispatch()

    const toggleFavRecipeDirections = () => {
        setShowDirections((showDirections) => !showDirections)
    }

    console.log(id)

    const handleRemoveRecFavorite =() => {
        fetch(`http://localhost:3000/api/v1/fav_recipes/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then((recipeToDelete) => {
                dispatch(deleteFavRecipes(recipeToDelete))
                console.log(recipeToDelete)
            
        })

    }
    

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            { showDirections ? (<p>{directions}</p>) : (null)}
            <button onClick={toggleFavRecipeDirections}> {showDirections ? ("Close Directions") : ("Show Directions")}</button>
            <button>Add a little note to self</button>
            <button onClick={handleRemoveRecFavorite} >This ain't no favorite of mine</button>
        </div>
    )
}

export default ProfileFavoritesRecipes