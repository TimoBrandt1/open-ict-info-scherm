import React from 'react'
import '../../App.css'
import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'


function FormBasic() {
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const [footer, setFooter] = useState('');
    const [iframe, setIframe] = useState(1);
    console.log(iframe);
    const handleChange = (setFunction, e) => {
        setFunction(e.target.value);
    }


    const saveData = () => { // save on cookies
        console.log(header, body, footer)
        document.cookie = `header=${header}`;
        document.cookie = `body=${body}`;
        document.cookie = `footer=${footer}`;
        setIframe(iframe + 1);
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

            <iFrame key={iframe} src="http://localhost:3000/formscreen" width="20%" height="200px"></iFrame>

            <Button href="/formscreen">Go to Screen</Button>
        </div>
    );
};

export default FormBasic;