import React from 'react'
import GoodsFavoriteCard from './GoodsFavoriteCard'
import { useSelector } from 'react-redux' 

const GoodsFavorites = () => {

    const favoriteGoods = useSelector((state) => state.favGoods.goods)

    console.log("lol this one", favoriteGoods)

    const toFavGoodsCard = favoriteGoods.map((littleFav) => (
        <GoodsFavoriteCard key={littleFav.id} favoriteItem={littleFav} />
    ))

    
    
    return (
        <div>
            { toFavGoodsCard }
        </div>
    )
}

export default GoodsFavorites