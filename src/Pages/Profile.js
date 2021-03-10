import React from 'react' 
import { useSelector } from 'react-redux' 
//Components
import ProfileFavoriteGoods from '../Components/ProfileFavoriteGoods'
import ProfileFavoritesRecipes from '../Components/ProfileFavoritesRecipes'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <ProfileFavoritesRecipes key={rec.id} recipes={rec}/>
    ))


    return (
        <div className="profile" >
            <h2 className="mt-5">My Favorites</h2>
            <div className="parent-container d-flex">
                <Container>
                    <Row className="my-5">
                            { allMyFavoriteItems }
                    </Row>
                </Container>
                <Container>
                    <Row className="my-5">
                            { allMyFavoriteRecipes }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile