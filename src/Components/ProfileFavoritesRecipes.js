import React, { useState } from 'react'

const ProfileFavoritesRecipes = ({ recipes }) => {
    const { title, image, ingredients, directions } = recipes
    const [showDirections, setShowDirections] = useState(false)

    const toggleFavRecipeDirections = () => {
        setShowDirections((showDirections) => !showDirections)
    }
    

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            { showDirections ? (<p>{directions}</p>) : (null)}
            <button onClick={toggleFavRecipeDirections}> {showDirections ? ("Close Directions") : ("Show Directions")}</button>
            <button>Add a little note to self</button>
            <button>This ain't no favorite of mine</button>
        </div>
    )
}

export default ProfileFavoritesRecipes