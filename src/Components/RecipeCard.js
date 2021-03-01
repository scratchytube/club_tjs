import React, { useState } from 'react' 

const RecipeCard = ({ oneRecipe }) => {
    const { title, image, ingredients, directions} = oneRecipe
    const [showDirections, setShowDirections] = useState(false)

    const handleToggleDirections = () => {
        setShowDirections((showDirections) => !showDirections)
    }

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            {showDirections ? (<p>{directions}</p>) : (null)}
            <button onClick={handleToggleDirections}>{ showDirections ? ("Close Directions") : ("Show me the way!")}</button>
            <button>Add Me To Favorites!</button>
        </div>
    )
}

export default RecipeCard