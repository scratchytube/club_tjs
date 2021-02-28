import React from 'react' 
import { useSelector } from 'react-redux'

const RecipeFavs = () => {
    
const myFavoriteRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

console.log(myFavoriteRecipes)

    return (
        <div>
            <h2>all the favorite recipe cards will go here</h2>
        </div>
    )
}

export default RecipeFavs