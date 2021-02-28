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
        }
    }
})

export const { addFavGoods } = favGoodsSlice.actions
export default favGoodsSlice.reducer 