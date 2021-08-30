import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from './Message'
import Loader from './Loader'
import { login } from '../actions/userActions'
import FormContainer from './FormContainer'


export default function Login({ location, history }) {
    const { Group, Label, Control } = Form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'
    console.log('redirect', redirect);

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
       
    }, [history, userInfo, redirect])

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger' >{error}</Message>}
            {loading && <Loader /> }
            <Form onSubmit={submitHandler} >
                <Group controlId='email' >
                    <Label>Email Address</Label>
                    <Control 
                        type='email' 
                        placeholder='Enter Email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    ></Control>
                </Group>

                  <Group controlId='password' >
                    <Label>Password</Label>
                    <Control 
                        type='password' 
                        placeholder='Enter Password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    ></Control>
                </Group>

                <Button type='submit' variant='primary' >Sign In</Button>
            </Form>

            <Row className='py-3' >
                <Col>
                    NewCustomer? <Link 
                        to={redirect !== '/' ? `/register?redirect=${redirect}` : '/register'} 
                        // to={'/register'} 
                        >Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}
