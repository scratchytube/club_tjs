import { configureStore } from '@reduxjs/toolkit' 
import recipeReducer from './recipe.js'

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
})

export default store