import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// images
import TJFlowers from '../images/tjflowers.jpg'
import TJInside from '../images/tj_inside.jpg'
import TJGroceries from '../images/tjgroceries.jpg'
import TJArt from '../images/tj_art.jpg'


const HomeCarousel = () => {
    return (

<Carousel >
    <Carousel.Item interval="1000">
        <img 
        className="d-block w-100"
        src={TJFlowers} alt="flowers" />
    </Carousel.Item>

    <Carousel.Item interval="1000">
        <img 
        className="d-block w-100"
        src={TJInside} alt="inside" />
    </Carousel.Item>

    <Carousel.Item interval="1000">
        <img 
        className="d-block w-100"
        src={TJGroceries} alt="groceries" />
    </Carousel.Item>

    <Carousel.Item interval="1000">
        <img 
        className="d-block w-100"
        src={TJArt} alt="flowers" />
    </Carousel.Item>
</Carousel>
    )
}

export default HomeCarousel