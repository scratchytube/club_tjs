import React from 'react'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// images
import TJAisle from '../images/tjAisle.jpg'
import RecipeSorta from '../images/recipeSorta.jpg'

const AboutUs = () => {
    return (
        <Container>
            <Row className="my-5">

                <Col className="col-md-4 my-4">
                    <img src={TJAisle} alt="cart" className="w-100" />
                    <h4 className="my-4">The New Stuff</h4>
                    <p>You can find all of the new goods Trader Joes has to offer here.</p>
                    <Button variant="outline-danger">New Goods</Button>
                </Col>

                <Col className="col-md-4 my-4 align-items-center">
                    <img src={RecipeSorta} alt="cart" className="w-100" />
                    <h4 className="my-4">The Delightful Recipes</h4>
                    <p>We put together a comprehsive list of our favorite Trader Joe Recipes here. Come check it out!</p>
                    <Button variant="outline-danger">Recipes</Button>
                </Col>

                <Col className="col-md-4 my-4">
                    <img src={TJAisle} alt="cart" className="w-100" />
                    <h4 className="my-4">The New Stuff</h4>
                    <p>You can find all of the new goods Trader Joes has to offer here. </p>
                    <Button variant="outline-danger">New Goods</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default AboutUs