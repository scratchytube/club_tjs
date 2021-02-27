import React from 'react'
import { useSelector } from 'react-redux'
// Components
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'
import GoodsFavorites from '../Components/GoodsFavorites'

const Goods = () => {

    const goods = useSelector((state) => state.good.items)

    const singleGoodCard = goods.map((oneGood) => (
        <GoodsCard key={oneGood.id} oneGood={oneGood}/>
    ))

    return(
        <div className="goods">
            <h2>Ah yeah show me the goods</h2>
            {singleGoodCard}
            <NewGoods />
            <GoodsFavorites />
        </div>
    )
}

export default Goods