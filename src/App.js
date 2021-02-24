import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Pages
import Header from './Components/Header'
import Home from './Pages/Home'
import Goods from './Pages/Goods'
import Recipes from './Pages/Recipes'
import Stores from './Pages/Stores'
import Resources from './Pages/Resources'
import Profile from './Pages/Profile'
// CSS
import './App.css';


const App = () => {

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
        </Switch>
    </div>
  );
}

export default App;

