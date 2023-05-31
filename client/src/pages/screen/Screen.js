import React from 'react'
import './style.Screen.scss';
import Slideshow from '../../components/slideshow/logic/component.SlideShow_Logic';

function Screen() {
    return (
        <div className='Screen-Content'>
            <Slideshow SecondsBetweenSlides={15}/>
        </div>
    );
}

export default Screen;