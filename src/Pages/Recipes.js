import React from 'react' 
import { useSelector } from 'react-redux'
// Components
import RecipeFilterBar from '../Components/RecipeFilterBar'
import RecipeCard from '../Components/RecipeCard'
import RecipeFavs from '../Components/RecipeFavs'

const Recipe = () => {
    
    const recipes = useSelector((state) => state.recipe.items)

    console.log(recipes)

    return (
        <div className="recipe" >
            <h2>it me from the recipe container</h2>
            <RecipeFilterBar />
            <RecipeCard />
            <RecipeFavs />
        </div>
    )
}

export default Recipe