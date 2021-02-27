import React from 'react' 

const RecipeCard = ({ oneRecipe }) => {
    const { title, image, ingredients, directions} = oneRecipe
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            <p>{directions}</p>

        </div>
    )
}

export default RecipeCard