import React from 'react'
import './style.Forms.scss';
import { Form, Button, Popup } from 'semantic-ui-react'
import { useState } from 'react'
import {SEnter} from './styles'


// go to ./FormTest.js to see how to use this component

function FormBasic({initialValues, storageKeyPrefix}) {
    const inputNames = Object.keys(initialValues);
    const [formValues, setFormValues] = useState(initialValues);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    console.log(formValues);

    const saveData = () => { // save the data to local storage with the prefix
            // make post request to server
            fetch('http://145.89.192.107/api/kennisdeling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formValues)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        setFormSubmitted(true);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    }
                );

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveData();
    }

    const handlePopupClose = () => {
        setFormSubmitted(false);
    }


    return (
        <div>
            <h1 className='Form'>Form Page</h1>
            <Popup style={{background: 'red'}}
                open={formSubmitted}
                onClose={handlePopupClose}
                content='Form submitted!'
                trigger = {(
                    <Form onSubmit={handleSubmit} onReset={() => setFormValues(initialValues)}>
                        {inputNames.map((name) => (
                            <Form.Field>
                                <Form.Input
                                    name={name}
                                    placeholder={name}
                                    onChange={(e) => handleChange(name, e.target.value)}
                                />
                            </Form.Field>
                        ))}

                        <SEnter type='submit'>Submit</SEnter>
                        <SEnter type='reset'>Cancel</SEnter>
                    </Form>
                )}
            />
            <Button href="/formscreen">Go to Screen</Button>
        </div>
    );
};

export default FormBasic;
