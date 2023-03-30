import React from "react";
import { useState, useEffect } from 'react';
import './style.SlideShow_Logic.scss';
import DebugSlide from '../../debug-slide/component.DebugSlide';
import KennisDelingSlide from "../../kennisdeling-slide/component.KennisdelingSlide";

function Slideshow({SecondsBetweenSlides}) {
  // Slides information, should later be moved to other file.
  const videoProps = {
    vSrc: { src: "videos/DebugSlideVideo.mp4" },
    vType: { type: "video/mp4" },
    vWidth: 1680,
    vHeight: 720,
    vAutoplay: true,
    vControls: false,
    vMuted: true,
    vLoop: true,

  };
  const debugSlideInfo = {
    ScreenName: 'Screen 1',
    GroupName: 'Group Debugslide',
    CurrentSlide: 'Debugslide',
    VideoAtributes: videoProps
  };
  const kennisDelingInfo = {
    Subject: 'AI',
    Speaker: 'Voornaam Achternaam',
    Time: '12:00',
    Location: 'Lokaal K0.94',
    Details: 'Alot of info that you might need to understand the subject.'
  };

  // Slide Show Logic all code under this comment
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Needs to be able to get Slide array in the future instead of having hard coded slides
  const components = [
    <DebugSlide {...debugSlideInfo}/>,
    // <KennisDelingSlide {...kennisDelingInfo}/>
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % components.length);
    }, SecondsBetweenSlides*1000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, components]);

  return (
    <>
      {components[currentIndex]}
    </>
  );
}

  export default Slideshow;