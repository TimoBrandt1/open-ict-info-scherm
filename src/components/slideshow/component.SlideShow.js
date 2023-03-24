import React from "react";
import { useState, useEffect } from 'react';
import './style.SlideShow.scss';
import DebugSlide from '../debug-slide/component.DebugSlide';
import KennisDelingSlide from "../kennisdeling-slide/component.KennisdelingSlide";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [<DebugSlide />, <KennisDelingSlide />];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % components.length);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, components]);

  return (
    <div>
      {components[currentIndex]}
    </div>
  );
}

  export default Slideshow;