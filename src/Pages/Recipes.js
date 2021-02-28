import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
// Components
import RecipeFilterBar from '../Components/RecipeFilterBar'
import RecipeCard from '../Components/RecipeCard'
import RecipeFavs from '../Components/RecipeFavs'

const Recipe = () => {
    const [recipeSearch, setRecipeSearch] = useState("")
    const recipes = useSelector((state) => state.recipe.items)

    const recipeArray = recipes
    .filter((oneRecipe) => (
        oneRecipe.ingredients.toLowerCase().includes(recipeSearch.toLowerCase())
    ))
    .map((oneRecipe) => (
        <RecipeCard key={oneRecipe.id} oneRecipe={oneRecipe} />
    ))
    


    return (
        <div className="recipe" >
            <h2>Here's some recipes TJ's fam</h2>
            <RecipeFilterBar setRecipeSearch={setRecipeSearch} />
            {recipeArray}
            <RecipeFavs />
        </div>
    )
}

export default Recipe