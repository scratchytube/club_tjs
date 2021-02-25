import React from 'react'
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'
import GoodsFavorites from '../Components/GoodsFavorites'

const Goods = () => {
    return(
        <div className="goods">
            <h2>it me from the goods page</h2>
            <GoodsCard />
            <NewGoods />
            <GoodsFavorites />
        </div>
    )
}

export default Goods