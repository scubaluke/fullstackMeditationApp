import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePhoneToSend } from '../actions/cartActions'

export default function SendToPage( { history } ) {
    const cart = useSelector(state => state.cart)
    const { sendToPhone } = cart
    console.log(sendToPhone);
    const { Group, Label, Control } = Form

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')))
    const [multipleNumbers, setMultipleNumbers] = useState(false)
    const [phone, setPhone] = useState(sendToPhone)
    const [country, setCountry] = useState(sendToPhone.country)
    console.log(cartItems);
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit');
        dispatch(savePhoneToSend({ phone, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Send to</h1>
                <Form onSubmit={submitHandler} >
                    <Group controlId='multipleNumbers' className="mb-3" >
                            <Form.Check type="checkbox" label="Sending to multiple numbers?" onChange={e => setMultipleNumbers(e.target.checked)} />
                    </Group>

                    <Group controlId='phone' >
                        <Label>Phone</Label>
                        <Control 
                            type='phone' 
                            placeholder='Enter phone' 
                            value={phone} 
                            required
                            onChange={e => setPhone(e.target.value)} 
                        ></Control>
                    </Group>

                      <Group controlId='country' >
                        <Label>Country</Label>
                        <Control 
                            type='country' 
                            placeholder='Enter country' 
                            value={country} 
                            required
                            onChange={e => setCountry(e.target.value)} 
                        ></Control>
                    </Group>

                    <Button type='submit' variant='info' >
                        Continue
                    </Button>
            </Form>
        </FormContainer>
    )
}
