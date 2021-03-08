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
        },
        addRecipeNote: (state, action) => {
            const updatedRecipe = state.myFavRecipes.find((rec) => rec.id === action.payload.id)
            updatedRecipe.note = action.payload.note
        }
    }
})

export const { addRecipes, addRecipeNote, deleteFavRecipes } = favRecipeSlice.actions
export default favRecipeSlice.reducer