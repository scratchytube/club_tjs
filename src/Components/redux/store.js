import { configureStore } from '@reduxjs/toolkit' 
import recipeReducer from './recipe.js'
import goodReducer from './good.js'
import favGoodsReducer from './fav_good'
import favRecipesReducer from './fav_recipe'

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        good: goodReducer,
        favGoods: favGoodsReducer,
        favRecipes: favRecipesReducer,
    },
})

export default store