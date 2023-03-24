import React from 'react'
import '../../App.scss'
import './style.Screen.scss';
import Slideshow from '../../components/slideshow/logic/component.SlideShow_Logic';

function Screen() {
    return (
        <div className='Screen-Content'>
            <Slideshow/>
        </div>
    );
}

export default Screen;