import { configureStore } from '@reduxjs/toolkit' 
import recipeReducer from './recipe.js'
import goodReducer from './good.js'

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        good: goodReducer,
    },
})

export default store