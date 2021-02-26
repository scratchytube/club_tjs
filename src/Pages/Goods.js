import React from 'react'
import { useSelector } from 'react-redux'
// Components
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'
import GoodsFavorites from '../Components/GoodsFavorites'

const Goods = () => {

    const goods = useSelector((state) => state.good.items)

    console.log(goods)

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