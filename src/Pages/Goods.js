import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// Components
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'
import GoodsFavorites from '../Components/GoodsFavorites'

const Goods = () => {
    // toggle Form state
    const [showForm, setShowForm] = useState(false)
    // from redux
    const goods = useSelector((state) => state.good.items)

    const singleGoodCard = goods.map((oneGood) => (
        <GoodsCard key={oneGood.id} oneGood={oneGood}/>
    ))

    const handleToggleForm = () => {
        setShowForm((showForm) => !showForm)
    }

    return(
        <div className="goods">
            <h2>Ah yeah show me the goods</h2>
            <button onClick={handleToggleForm}>{ showForm ? ("Eh changed my mind") : ("Add a new item you found!")}</button> 
            { showForm ? (<NewGoods handleToggleForm={handleToggleForm}/>) : null}
            {singleGoodCard}
            <GoodsFavorites />
        </div>
    )
}

export default Goods