import React from 'react'
import '../../App.css'

function BasicScreen() {
    const getCookie = (name) => { // get cookie by name
        return document.cookie.split('; ').find(row => row.startsWith(name)).split('=')[1];
    }
    const data = { // get cookies with names, header, body, footer
        header: getCookie('header'),
        body: getCookie('body'),
        footer: getCookie('footer')
    }



    let checkCookie = () => { // check if cookies are not the same as data
        if (data.header !== getCookie('header') || data.body !== getCookie('body') || data.footer !== getCookie('footer')) {
            // reload page
            window.location.reload();
        }
    }

    window.setInterval(checkCookie, 1000); // check every second (1000ms


    return (
        <div>
            <h1 className='Screen'>{data.header}</h1>
            <p>{data.body}</p>
            <footer><h2>{data.footer}</h2></footer>
        </div>
    );
}

export default BasicScreen;