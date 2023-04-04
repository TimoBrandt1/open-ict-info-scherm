import React from 'react'
import { Form, Button, Popup } from 'semantic-ui-react'
import { useState } from 'react'


// go to ./FormTest.js to see how to use this component

function FormBasic({initialValues, endpoint}) {
    const inputNames = Object.keys(initialValues);
    const [formValues, setFormValues] = useState(initialValues);
    const [formSubmitted, setFormSubmitted] = useState(false);
    let hasImage = false;
    // check if initial values have an image property
    // if so, add a state for the image
    if (initialValues.hasOwnProperty('image')) {
        let hasImage = true;
        const [file, setFile] = useState(null);
    }

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    console.log(formValues);

    const saveData = () => { // save the data to local storage with the prefix
            // make post request to server
            if (hasImage) {
                setFormValues({ ...formValues, image: file });
            }

            fetch('http://145.89.192.107/api' + endpoint, {
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
                            {hasImage && name === 'image' && (
                                <Form.Input
                                    name={name}
                                    type='file'
                                    onChange={handleFileChange}
                                />
                            )}
                            </Form.Field>
                        ))}

                        <Button type='submit'>Submit</Button>
                        <Button type='reset'>Cancel</Button>
                    </Form>
                )}
            />
            <Button href="/formscreen">Go to Screen</Button>
        </div>
    );
};

export default FormBasic;
