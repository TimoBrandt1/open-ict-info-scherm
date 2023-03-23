import React from "react";
import { useState, useEffect } from 'react';
import './SlideShow.css';
import DebugSlide from './DebugSlide';
import KennisDelingSlide from "./KennisdelingSlide";

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