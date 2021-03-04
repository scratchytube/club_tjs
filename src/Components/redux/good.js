import { createSlice } from '@reduxjs/toolkit' 

const goodSlice = createSlice({
    name: "good",
    initialState: {
        items: [],
        currentIndex: 0
    },
    reducers: {
        addGoods: (state, action) => {
            state.items = action.payload
        },
        addLike: (state, action) => {
            const updatedObject = state.items.find((itemToLike) => itemToLike.id === action.payload.id)
            updatedObject.likes = updatedObject.likes + 1
            return console.log(updatedObject.likes)
        }
    }
})

export const { addGoods, addLike } = goodSlice.actions
export default goodSlice.reducer