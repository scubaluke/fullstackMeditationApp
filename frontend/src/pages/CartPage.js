import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addToCart } from '../actions/cartActions'


export default function CartPage({match, location}) {
    const productId = match.params.id

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
       if (productId) {
           dispatch(addToCart(productId))
       }
    }, [dispatch, productId])

    const removeFromCartHandler = (id) => {
        console.log(id);
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message >Your cart is empty <Link to='/shop' >Go Back</Link></Message> : (
                    <ListGroup variant='flush' >
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}> 
                                        <Image src ={item.image} alt={item.mantraListName} fluid rounded/>
                                    </Col>
                                    <Col md={3} >
                                        <Link to={'/shop'} >{item.header}</Link>
                                    </Col>
                                    <Col md={2} >${(item.price / 100).toFixed(2)}</Col>
                                    <Col md={2} >
                                        <Button  type='button' variant='info' onClick={() => removeFromCartHandler(item.product)} >
                                            <i className='fas fa-trash' ></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={2}>

            </Col>
            <Col md={2} >
            
            </Col>
        </Row>
    )
}


