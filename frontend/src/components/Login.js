import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { userDispatch, userSelector } from 'react-redux'
// todo: build... Message, loader
// import Message from 
// import loader
import { login } from '../actions/userActions'
import FormContainer from './FormContainer'


export default function Login() {
    const { Group, Label, Control } = Form
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    
    const submitHandler = () => {
        console.log('submit');
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler} >
                <Group controlId='email' >
                    <Label>Email Address</Label>
                    <Control type='email' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} ></Control>
                </Group>

                <Group controlId='phone' >
                    <Label>Phone Number</Label>
                    {/* todo: check type phone number in docs */}
                    <Control type='phone number' placeholder='Enter Phone Number' value={phone} onChange={e => setPhone(e.target.value)} ></Control>
                </Group>
            </Form>
        </FormContainer>
    )
}
