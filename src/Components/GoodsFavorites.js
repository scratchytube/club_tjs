import React from 'react'
import { useSelector } from 'react-redux' 

const GoodsFavorites = () => {

    const favoriteGoods = useSelector((state) => state.favGoods.goods)

    console.log(favoriteGoods)
    
    return (
        <div>
            <h2>some favorite items will go here when i click the add favorite button</h2>
        </div>
    )
}

export default GoodsFavorites