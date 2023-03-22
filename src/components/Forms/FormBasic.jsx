import React from 'react'
import '../../App.css'
import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'


// go to ./FormTest.js to see how to use this component

function FormBasic({initialValues, storageKeyPrefix}) {
    const inputNames = Object.keys(initialValues);
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const saveData = () => { // save the data to local storage with the prefix
        Object.keys(formValues).forEach((key) => {
            localStorage.setItem(`${storageKeyPrefix}-${key}`, formValues[key]);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveData();
    }

    return (
        <div>
            <h1 className='Form'>Form Page</h1>
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

                <Button type='submit'>Submit</Button>
                <Button type='reset'>Cancel</Button>
            </Form>
            <Button href="/formscreen">Go to Screen</Button>
        </div>
    );
};

export default FormBasic;