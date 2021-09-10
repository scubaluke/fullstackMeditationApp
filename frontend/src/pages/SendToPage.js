import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

export default function SendToPage( { history } ) {
    const { Group, Label, Control } = Form
    const [multipleNumbers, setMultipleNumbers] = useState(false)
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit');
    }

    return (
        <FormContainer>
            <h1>Send to</h1>
                <Form onSubmit={submitHandler} >
                    <Group controlId='multipleCheckBox' className="mb-3" >
                            <Form.Check type="checkbox" label="Sending to multiple numbers?" />
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
