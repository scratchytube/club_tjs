import React from 'react' 

const RecipeFilterBar = ({ setRecipeSearch }) => {
    return (
        <div>
            <input 
            type="text"
            placeholder="What you thinkin"
            onChange={(e) => setRecipeSearch(e.target.value)}
            />
        </div>
    )
}

export default RecipeFilterBar