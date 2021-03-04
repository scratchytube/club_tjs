import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoods } from '../Components/redux/good'
// Components
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'


const Goods = ({ user }) => {
    const dispatch = useDispatch()
    // toggle Form state
    const [showForm, setShowForm] = useState(false)
    // goods array from redux
    const goods = useSelector((state) => state.good.items)

    const handleToggleForm = () => {
        setShowForm((showForm) => !showForm)
    }

    const singleGoodCard = goods.map((oneGood) => (
        <GoodsCard key={oneGood.id} oneGood={oneGood} user={user} />
    ))
        
    // adding a new good from the form
    const handleNewGood = newGood => {
        const brandNewGoodArray = [newGood, ...goods]
        dispatch(addGoods(brandNewGoodArray))
    }

    return(
        <div className="goods">
            <h2>Ah yeah show me the goods</h2>
            <button onClick={handleToggleForm}>{ showForm ? ("Eh changed my mind") : ("Add a new item you found!")}</button> 
            { showForm ? (<NewGoods handleToggleForm={handleToggleForm} onHandleNewGood={handleNewGood} />) : null}
            {singleGoodCard}
            
        </div>
    )
}

export default Goods