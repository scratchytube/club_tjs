import React from 'react' 

const RecipeFilterBar = ({ setRecipeSearch }) => {
    return (
        <div>
            <input 
            type="text"
            placeholder="Type in an ingredient and we'll find a recipe with it"
            onChange={(e) => setRecipeSearch(e.target.value)}
            />
        </div>
    )
}

export default RecipeFilterBar