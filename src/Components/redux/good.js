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
        }
    }
})

export const { addGoods } = goodSlice.actions
export default goodSlice.reducer