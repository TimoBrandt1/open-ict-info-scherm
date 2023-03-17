import React from 'react'
import '../../App.css'

function BasicScreen() {
    const data = { // get cookies with names, header, body, footer
        header: localStorage.getItem('header'),
        body: localStorage.getItem('body'),
        footer: localStorage.getItem('footer')
    }

    let checkData = () => { // check if localStorage is not the same as data
        if (data.header !== localStorage.getItem('header') || data.body !== localStorage.getItem('body') || data.footer !== localStorage.getItem('footer')) {
            // reload page
            window.location.reload();
        }
    }

    window.setInterval(checkData, 1000); // check every second (1000ms


    return (
        <div>
            <h1 className='Screen'>{data.header}</h1>
            <p>{data.body}</p>
            <footer><h2>{data.footer}</h2></footer>
        </div>
    );
}

export default BasicScreen;