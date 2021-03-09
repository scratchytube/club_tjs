import React from 'react'
import AboutUs from '../Components/AboutUs'
import HomeCarousel from '../Components/HomeCarousel'

const Home = () => {
    return (
        <div className="home">
            <HomeCarousel />
            <AboutUs />
        </div>
    )
}

export default Home