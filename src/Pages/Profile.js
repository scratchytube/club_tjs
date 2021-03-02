import React from 'react' 
import { useSelector } from 'react-redux' 
//Components
import ProfileFavoriteGoods from '../Components/ProfileFavoriteGoods'
import ProfileFavoritesRecipes from '../Components/ProfileFavoritesRecipes'

const Profile = () => {

    const profileFavoriteGoods = useSelector((state) => state.favGoods.goods)
    const myFavoriteRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

    console.log(profileFavoriteGoods)
    console.log(myFavoriteRecipes)

    const allMyFavoriteItems = profileFavoriteGoods.map((item) => (
        <ProfileFavoriteGoods key={item.id} item={item} />
    ))

    return (
        <div className="profile" >
            <h2>it me from the profile page</h2>
            { allMyFavoriteItems }
            <ProfileFavoritesRecipes />
        </div>
    )
}

export default Profile