import React from 'react' 
import { useSelector } from 'react-redux' 
import { useDispatch } from 'react-redux'
import { addFavGoods } from '../Components/redux/fav_good'
//Components
import ProfileFavoriteGoods from '../Components/ProfileFavoriteGoods'
import ProfileFavoritesRecipes from '../Components/ProfileFavoritesRecipes'

const Profile = () => {
    const dispatch = useDispatch()
    // from redux
    const profileFavoriteGoods = useSelector((state) => state.favGoods.goods)
    const myFavoriteRecipes = useSelector((state) => state.favRecipes.myFavRecipes)

    console.log(profileFavoriteGoods)
    console.log(myFavoriteRecipes)

    const onDeleteFavItem = (itemToDelete) => {
        const updatedFavGoodArray = profileFavoriteGoods.filter((otherGoods) => otherGoods.id !==itemToDelete.id )
        dispatch(addFavGoods(updatedFavGoodArray))
    }
    
    // our iterations from redux
    const allMyFavoriteItems = profileFavoriteGoods.map((item) => (
        <ProfileFavoriteGoods key={item.id} item={item.good} onDeleteFavItem={onDeleteFavItem} />
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