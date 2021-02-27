import React from 'react' 
import { useSelector } from 'react-redux'
// Components
import RecipeFilterBar from '../Components/RecipeFilterBar'
import RecipeCard from '../Components/RecipeCard'
import RecipeFavs from '../Components/RecipeFavs'

const Recipe = () => {
    
    const recipes = useSelector((state) => state.recipe.items)

    const recipeArray = recipes.map((oneRecipe) => (
        <RecipeCard key={oneRecipe.id} oneRecipe={oneRecipe} />
    ))

    return (
        <div className="recipe" >
            <h2>Here's some recipes TJ's fam</h2>
            <RecipeFilterBar />
            {recipeArray}
            <RecipeFavs />
        </div>
    )
}

export default Recipe