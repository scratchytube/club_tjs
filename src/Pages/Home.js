import React from 'react'
import TwitterFeed from '../Components/TwitterFeed'
import AboutUs from '../Components/AboutUs'

const Home = () => {
    return (
        <div className="home">
            <h2>this me from the home page</h2>
            <AboutUs />
            <TwitterFeed />
        </div>
    )
}

export default Home