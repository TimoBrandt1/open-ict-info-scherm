import React from 'react'
import '../../App.css'

function BasicScreen() {
    const data = { // get cookies with names, header, body, footer
        header: document.cookie.split('; ').find(row => row.startsWith('header')).split('=')[1],
        body: document.cookie.split('; ').find(row => row.startsWith('body')).split('=')[1],
        footer: document.cookie.split('; ').find(row => row.startsWith('footer')).split('=')[1],
    }


    return (
        <div>
            <h1 className='Screen'>{data.header}</h1>
            <p>{data.body}</p>
            <footer><h2>{data.footer}</h2></footer>
        </div>
    );
}

export default BasicScreen;