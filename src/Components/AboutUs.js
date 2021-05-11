import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TJAisle from '../images/tjAisle.jpg'
import RecipeSorta from '../images/recipeSorta.jpg'

const AboutUs = () => {
    return (
        <Container>
            <Row className="my-5 align-items-end mb-5">

                <Col className="col-md-4 my-4">
                    <img src={TJAisle} alt="cart" className="w-100" />
                    <h4 className="my-4">The New Stuff</h4>
                    <p>You can find all of the new goods Trader Joes has to offer here.</p>
                    <Link to="/goods" className="button" variant="outline-danger">New Goods</Link>
                </Col>

                <Col className="col-md-4 my-4">
                    <img src={RecipeSorta} alt="cart" className="w-100" />
                    <h4 className="my-4">The Delightful Recipes</h4>
                    <p>We put together a comprehsive list of our favorite Trader Joe Recipes here. Come check it out!</p>
                    <Link to="/recipes" variant="outline-danger">Recipes</Link>
                </Col>

                <Col className="col-md-4 my-4">
                    <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/Apple-maps-app.png" alt="cart" className="w-100" />
                    <h4 className="my-4">Store Locator</h4>
                    <p>View all the stores in your area</p>
                    <Link to="/stores" variant="outline-danger">Store Locator</Link>
                </Col>

            </Row>
        </Container>
    )
}

export default AboutUs