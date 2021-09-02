import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

export default function ProfilePage({ history }) {
    const { Group, Label, Control } = Form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } =  userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } =  userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } =  userUpdateProfile
    console.log('success',  success);

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        }
        else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
                setPhone(user.phone)
            }
        }
    }, [dispatch, history, userInfo, user, success])
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== reEnterPassword) {
            setMessage('Passwords do not match')
            return;
        }
        setMessage(null)
        dispatch(updateUserProfile({ id: user._id, name, email, phone, password }))
    }
    return (
        <Row>
            <Col md={3} >
                <h2>Profile</h2>
            {error && <Message variant='danger' >{error}</Message> }
            {message && <Message variant='danger' >{message}</Message> }
            {success && <Message variant='success' >Profile updated!</Message> }
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
                <Button type='submit' variant='primary' >Update</Button>
            </Form>
            </Col>
            <Col md={9} >
                <h2>Orders</h2>
            </Col>
        </Row>
      
    )
}
