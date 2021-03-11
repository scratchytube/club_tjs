import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoods } from '../Components/redux/good'
// Components
import GoodsCard from '../Components/GoodsCard'
import NewGoods from '../Components/NewGoods'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'




const Goods = ({ user }) => {
    const dispatch = useDispatch()
    // toggle Form state
    const [showForm, setShowForm] = useState(false)
    // goods array from redux
    const goods = useSelector((state) => state.good.items)
    console.log(goods)
    // local state for sorting users
    // const [ sortLikedGoods, setSortLikedGoods] = useState([])

    const handleToggleForm = () => {
        setShowForm((showForm) => !showForm)
    }

    const singleGoodCard = goods
    .map((oneGood) => (
        <GoodsCard key={oneGood.id} oneGood={oneGood} user={user} />
    ))
        
    // adding a new good from the form
    const handleNewGood = newGood => {
        const brandNewGoodArray = [newGood, ...goods]
        dispatch(addGoods(brandNewGoodArray))
    }
    
    // sort the array by most popular
    const handleSortPopular = () => {
        const sortedGoods = [...goods].sort((a,b) => {
            return b.likes - a.likes
        })
        dispatch(addGoods(sortedGoods))
        }
        // sort the array by least popular
    const handleSortNotPoppin = () => {
            const sortedNotSoGood = [...goods].sort((a,b) => {
                return a.likes - b.likes
            })
            dispatch(addGoods(sortedNotSoGood))
        }

    return(
        <div className="goods">
            <div className="d-flex ml-6">
                <Button onClick={handleSortPopular}>Sort by most popular</Button>
                <Button onClick={handleSortNotPoppin} >Lemme see least popular</Button>
                <Button onClick={handleToggleForm}>{ showForm ? ("Eh changed my mind") : ("Add a new item you found!")}</Button> 
            </div>
            { showForm ? (<NewGoods handleToggleForm={handleToggleForm} onHandleNewGood={handleNewGood} />) : null}
            <section id="gallery" className="mt-5">
                <Container>
                    <Row className="my-5">
                            {singleGoodCard}
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Goods