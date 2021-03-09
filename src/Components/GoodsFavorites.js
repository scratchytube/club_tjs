import React from 'react'
import { useSelector } from 'react-redux' 

const GoodsFavorites = () => {

    const favoriteGoods = useSelector((state) => state.favGoods.goods)

    console.log("lol this one", favoriteGoods)

    
    
    return (
        <div>
            
        </div>
    )
}

export default GoodsFavorites