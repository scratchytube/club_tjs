import React from 'react'
import { useSelector } from 'react-redux' 

const ProfileFavorites = () => {

    const profileFavoriteGoods = useSelector((state) => state.favGoods.goods)
    const myFavoriteRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

    console.log(profileFavoriteGoods)
    console.log(myFavoriteRecipes)


    return (
        <div>
            <h2>dis my favorites</h2>
        </div>
    )
}

export default ProfileFavorites