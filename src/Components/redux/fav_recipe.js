import { createSlice } from '@reduxjs/toolkit'

const favRecipeSlice = createSlice ({
    name: 'favRecipes',
    initialState: {
        myFavRecipes: []
    },
    reducers: {
        addRecipes: (state, action) => {
            state.myFavRecipes = action.payload
        },
        deleteFavRecipes: (state, action) => {
            const updatedFavRecipes = state.myFavRecipes.filter((recipe) => recipe.id !== action.payload.id)
            state.myFavRecipes = updatedFavRecipes
        }
    }
})

export const { addRecipes, deleteFavRecipes } = favRecipeSlice.actions
export default favRecipeSlice.reducer