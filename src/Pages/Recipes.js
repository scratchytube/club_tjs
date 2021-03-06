import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
// Components
import RecipeFilterBar from '../Components/RecipeFilterBar'
import RecipeCard from '../Components/RecipeCard'
//CSS
import './Recipes.css'
// BootStrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

    const Recipe = ({ user }) => {
    const [recipeSearch, setRecipeSearch] = useState("")
    const recipes = useSelector((state) => state.recipe.items)


    const recipeArray = recipes
    .filter((oneRecipe) => (
        oneRecipe.ingredients.toLowerCase().includes(recipeSearch.toLowerCase())
    ))
    .map((oneRecipe) => (
        <RecipeCard key={oneRecipe.id} oneRecipe={oneRecipe} user={user} />
    ))
    


    return (
        <div className="recipe">
            <div className="mt-5 mb-3 ml-3">
                <h1>Here's some recipes TJ's fam</h1>
            </div>
                <RecipeFilterBar setRecipeSearch={setRecipeSearch} />

                <Container>
                    <Row className="my-5">
                        {recipeArray}
                    </Row>
                </Container>
        </div>
    )
}

export default Recipe