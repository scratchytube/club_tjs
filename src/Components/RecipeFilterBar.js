import React from 'react' 

const RecipeFilterBar = ({ setRecipeSearch }) => {
    return (
        <div className="d-flex justify-content-center">
            <input 
            type="text"
            placeholder="What you thinkin"
            onChange={(e) => setRecipeSearch(e.target.value)}
            />
        </div>
    )
}

export default RecipeFilterBar