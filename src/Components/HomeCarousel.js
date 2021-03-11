import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// images
import TJFlowers from '../images/tjflowers.jpg'
import TJCart from '../images/tjCart.jpg'
import TJOutside from '../images/outsidetjs.jpg'
//CSS File
import './HomeCarousel.css'




const HomeCarousel = () => {
    return (

<Carousel id="carousel">

<Carousel.Item interval="900000000">
        <img 
        className="d-block w-100"
        src={TJFlowers} alt="flowers" />
         <Carousel.Caption className="carousel-caption">
            <div className="container">
                <div>
                    <div className="row justify-content-center">
                        <div className="col-8 bg-custom d-none d-lg-block py-3 px-0">
                            <h1>Club Trader Joes</h1>
                            <div className="border-top border-primary w-50 mx-auto my-3"></div>
                            <h3>a site for trader joe lovers by a trader joe lover</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
    </Carousel.Item>

<Carousel.Item interval="900000000">
        <img 
        className="d-block w-100"
        src={TJCart} alt="shopping cart" />
        <Carousel.Caption className="carousel-caption">
            <div className="container">
                <div>
                    <div className="row justify-content-center">
                        <div className="col-8 bg-custom d-none d-lg-block py-3">
                            <h1>Club Trader Joes</h1>
                            <div className="border-top border-primary w-50"></div>
                            <h3>For Trader Joe lovers by a Trader Joe lover</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval="900000000">
        <img 
        className="d-block w-100"
        src={TJOutside} alt="groceries" />
    </Carousel.Item>

</Carousel>
    )
}

export default HomeCarousel