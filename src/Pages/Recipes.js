import React from 'react' 
import RecipeFilterBar from '../Components/RecipeFilterBar'
import RecipeCard from '../Components/RecipeCard'
import RecipeFavs from '../Components/RecipeFavs'

const Recipe = () => {
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