import React from 'react' 

const RecipeCard = ({ oneRecipe }) => {
    const { title, image, ingredients, directions} = oneRecipe
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            <p>{directions}</p>
            <button>Add Me To Favorites!</button>
        </div>
    )
}

export default RecipeCard