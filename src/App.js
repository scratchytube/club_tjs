import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItems } from './Components/redux/recipe'
import { addGoods } from './Components/redux/good'
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

  return (
    <div className="App">
      <Header />
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
            <Auth/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

