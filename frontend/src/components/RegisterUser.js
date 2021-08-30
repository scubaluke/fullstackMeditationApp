import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'


export default function Register({ location, history }) {
    const { Group, Label, Control } = Form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } =  userRegister

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
      
    }, [history, userInfo, redirect])
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== reEnterPassword) {
            setMessage('Passwords do not match')
            return;
        }
        dispatch(register(name, email, phone, password))
    }
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {error && <Message variant='danger' >{error}</Message> }
            {error && <Message variant='danger' >{message}</Message> }
            {loading && <Loader />}
            <Form onSubmit={submitHandler} >

                 <Group controlId='name' >
                    <Label>Name</Label>
                    <Control 
                        type='name' 
                        placeholder='Enter Name' 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    ></Control>
                </Group>

                <Group controlId='email' >
                    <Label>Email Address</Label>
                    <Control 
                        type='email' 
                        placeholder='Enter Email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    ></Control>
                </Group>

                <Group controlId='phone' >
                    <Label>Phone Number</Label>
                    <Control 
                        type='tel' 
                        placeholder='Enter Phone Number' 
                        value={phone} 
                        onChange={e => setPhone(e.target.value)} 
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

                  <Group controlId='reEnterPassword' >
                    <Label>Re-enter Password</Label>
                    <Control 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={reEnterPassword} 
                        onChange={e => setReEnterPassword(e.target.value)} 
                    ></Control>
                </Group>
                <Button type='submit' variant='primary' >Register</Button>
            </Form>

            <Row className='py-3' >
                <Col>
                    Have an Account? <Link 
                        to={redirect  ? `/login?redirect=${redirect}` : '/login'} 
                        >Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}
