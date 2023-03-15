import React from 'react'
import '../../App.css'
import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'


function FormBasic() {
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const [footer, setFooter] = useState('');

    const handleChange = (setFunction, e) => {
        setFunction(e.target.value);
    }

    const saveData = () => { // save on cookies
        console.log(header, body, footer)
        document.cookie = `header=${header}`;
        document.cookie = `body=${body}`;
        document.cookie = `footer=${footer}`;
    }

    return (
        <div>
            <h1 className='Form'>Form Page</h1>
            <Form onSubmit={saveData}>
                <Form.Field>
                    <Form.Input name='header' placeholder='Header' value={header} onChange={(e) => handleChange(setHeader, e)} />
                </Form.Field>
                <Form.Field>
                    <Form.Input name='body' placeholder='Body' value={body} onChange={(e) => handleChange(setBody, e)} />
                </Form.Field>
                <Form.Field>
                    <Form.Input name='footer' placeholder='Footer' value={footer} onChange={(e) => handleChange(setFooter, e)} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    );
};

export default FormBasic;