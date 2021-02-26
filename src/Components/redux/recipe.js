import { createSlice } from '@reduxjs/toolkit' 

const recipeSlice = createSlice ({
    name: "recipe",
    initialState: {
        items: [],
        currentIndex: 0
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { addItems } = recipeSlice.actions
export default recipeSlice.reducer