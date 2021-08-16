import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { userDispatch, userSelector } from 'react-redux'
// todo: build... Message, loader
// import Message from 
// import loader
import { login } from '../actions/userActions'
import FormContainer from './FormContainer'


export default function Login({ location, history }) {
    const { Group, Label, Control } = Form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const redirect = location.search ? location.search.split('=')[1] : '/'

    
    const submitHandler = (e) => {
        e.preventDefault()

        //Dispatch
        console.log('submit');
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
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
                        to={redirect ? `/register?redirect=${redirect}` : '/register'} 
                        // to={'/register'} 

                        >Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}
