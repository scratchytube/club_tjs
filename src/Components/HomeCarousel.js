import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// images
import TJFlowers from '../images/tjflowers.jpg'
import TJCart from '../images/tjCart.jpg'
import TJOutside from '../images/outsidetjs.jpg'




const HomeCarousel = () => {
    return (

<Carousel >

    <Carousel.Item interval="12341000">
        <img 
        className="d-block w-100"
        src={TJFlowers} alt="flowers" />
    </Carousel.Item>

    <Carousel.Item interval="12341000">
        <img 
        className="d-block w-100"
        src={TJCart} alt="shopping cart" />
    </Carousel.Item>

    <Carousel.Item interval="12341000">
        <img 
        className="d-block w-100"
        src={TJOutside} alt="groceries" />
    </Carousel.Item>

</Carousel>
    )
}

export default HomeCarousel