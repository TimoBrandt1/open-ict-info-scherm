import React from "react";
import './SlideShow.css';
import DebugSlide from './DebugSlide';
import KennisDelingSlide from "./KennisdelingSlide";

function NextSlide(){
    var showNextSlide = false;
    if(showNextSlide = true){
        return (
            <div className="slide">
                <DebugSlide/>
            </div>
          );
    }
    else{
        return (
            <div className="slide">
                <KennisDelingSlide />
            </div>
          );
    }
}
function Slideshow() {
    return (
      <div className="slideshow">
        <div className="slideshowSlider">
          <NextSlide/>
        </div>
      </div>
    );
  }

  export default Slideshow;