import { createSlice } from '@reduxjs/toolkit'

const favGoodsSlice = createSlice ({
    name: "favGoods",
    initialState: {
        goods: [],
        currentIndex: 0,
    },
    reducers: {
        addFavGoods: (state, action) => {
            state.goods = action.payload
        },
        deleteFavGood: (state, action) => {
            const updatedFavGoods = state.goods.filter((good) => good.id !== action.payload.id)
            state.goods = updatedFavGoods
        },
        addComment: (state, action) => {
            const updatedGood = state.goods.find((itemAddComment) => itemAddComment.id === action.payload.id)
            updatedGood.note = action.payload.note
        }
        
    }
})

export const { addFavGoods, addComment, deleteFavGood } = favGoodsSlice.actions
export default favGoodsSlice.reducer 