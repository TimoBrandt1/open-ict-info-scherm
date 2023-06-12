import React from 'react'
import './style.Forms.scss';
import { Form, Button, Popup } from 'semantic-ui-react'
import { useState } from 'react'
import {SEnter} from './styles'
import KennisdelingenJSON from '../../json/kennisdelingen.json';

// go to ./FormTest.js to see how to use this component

function FormBasic({initialValues, storageKeyPrefix}) {
    const inputNames = Object.keys(initialValues);
    const [formValues, setFormValues] = useState(initialValues);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    console.log(formValues);

    const saveData = () => {
        const updatedData = [...KennisdelingenJSON, formValues]; // Assuming `jsonFileData` contains the existing JSON data
      
        console.log('Updated Data:', updatedData);
        setFormSubmitted(true);
      };

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
        </div>
    );
};

export default FormBasic;
