import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItems } from './Components/redux/recipe'
import { addGoods } from './Components/redux/good'
import { addFavGoods } from './Components/redux/fav_good'
import { addRecipes } from './Components/redux/fav_recipe'
// Pages
import Header from './Components/Header'
import Home from './Pages/Home'
import Goods from './Pages/Goods'
import Recipes from './Pages/Recipes'
import Stores from './Pages/Stores'
import Resources from './Pages/Resources'
import Profile from './Pages/Profile'
import Auth from './Pages/Auth'
// CSS
import './App.css';


const App = () => {
  const dispatch = useDispatch()

  // fake auth
  const [user, setUser] = useState(null)
  //fake auth
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/me")
    .then((r) => r.json())
    .then(issaMe => {
      setUser(issaMe)
    })
  }, [])
  // fake auth

  console.log(user)
    
  
  // Recipe Fetch
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/recipes')
        .then((r) => r.json())
        .then((recipeArray) => {
            dispatch(addItems(recipeArray))
        })
    }, [dispatch])

    // Goods Fetch
    useEffect(() => {
      fetch('http://localhost:3000/api/v1/goods')
      .then((r) => r.json())
      .then((goodsArray) => {
        dispatch(addGoods(goodsArray))
      })
    }, [dispatch])

    // FavGoods Fetch
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/fav_goods")
      .then((r) => r.json())
      .then((favGoodsArray) => {
        dispatch(addFavGoods(favGoodsArray))
      })
    }, [dispatch])

    // FavRecipes Fetch
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/fav_recipes")
      .then((r) => r.json())
      .then((favoriteRecipesArray) => {
        dispatch(addRecipes(favoriteRecipesArray))
      })
    }, [dispatch])

  return (
    <div className="App">
      <Header user={user} />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/goods">
            <Goods />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/stores">
            <Stores />
          </Route> 
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/auth">
            <Auth setUser={setUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

