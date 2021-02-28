import { createSlice } from '@reduxjs/toolkit'

const favRecipeSlice = createSlice ({
    name: 'favRecipes',
    initialState: {
        myFavRecipes: []
    },
    reducers: {
        addRecipes: (state, action) => {
            state.myFavRecipes = action.payload
        }
    }
})

export const { addRecipes } = favRecipeSlice.actions
export default favRecipeSlice.reducer