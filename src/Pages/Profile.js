import React from 'react' 
import { useSelector } from 'react-redux' 
//Components
import ProfileFavoriteGoods from '../Components/ProfileFavoriteGoods'
import ProfileFavoritesRecipes from '../Components/ProfileFavoritesRecipes'

const Profile = () => {
    // from redux
    const profileFavoriteGoods = useSelector((state) => state.favGoods.goods)
    const myFavoriteRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

    console.log(profileFavoriteGoods)
    console.log(myFavoriteRecipes)

    // our iterations from redux
    const allMyFavoriteItems = profileFavoriteGoods.map((item) => (
        <ProfileFavoriteGoods key={item.id} item={item} />
    ))
    const allMyFavoriteRecipes = myFavoriteRecipes.map((rec) => (
        <ProfileFavoritesRecipes key={rec.id} recipes={rec.recipe}/>
    ))

    return (
        <div className="profile" >
            <h2>it me from the profile page</h2>
            { allMyFavoriteItems }
            { allMyFavoriteRecipes }
        </div>
    )
}

export default Profile