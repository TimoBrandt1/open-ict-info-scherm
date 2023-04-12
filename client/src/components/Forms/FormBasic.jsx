import React from 'react'
import { Form, Button, Popup } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Buffer } from 'buffer'


// go to ./FormTest.js to see how to use this component

function FormBasic({initialValues, endpoint}) {
    const inputNames = Object.keys(initialValues);
    const [formValues, setFormValues] = useState(initialValues);
    const [formSubmitted, setFormSubmitted] = useState(false);
    let hasImage = false;
    // check if initial values have an image property
    // if so, add a state for the image

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFileChange = (image) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(image);

        reader.onload = () => {
            setFormValues({ ...formValues, image: { buffer: reader.result }});
        };
    };

    const saveData = () => { // save the data to local storage with the prefix
            // make post request to server// Encode image data as Base64
            console.log(formValues);
            const imageData = formValues.image ? { buffer: formValues.image.buffer } : null;
            const encodedImageData = imageData ? Buffer.from(imageData.buffer).toString('base64') : null;
            console.log((encodedImageData.length/4)*3)
            const requestBody = {
                onderwerp: formValues.onderwerp,
                details: formValues.details,
                image: { buffer: encodedImageData }
            };


            console.log(requestBody);
            fetch('http://145.89.192.107/api' + endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
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
                                {name !== 'image' && (
                                <Form.Input
                                    name={name}
                                    placeholder={name}
                                    onChange={(e) => handleChange(name, e.target.value)}
                                />
                            )}
                            {name === 'image' && (
                                <Form.Input
                                    name={name}
                                    type='file'
                                    onChange={(e) => handleFileChange(e.target.files[0])}
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