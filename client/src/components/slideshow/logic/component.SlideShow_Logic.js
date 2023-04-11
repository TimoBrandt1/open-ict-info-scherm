import React from "react";
import { useState, useEffect } from 'react';
import './style.SlideShow_Logic.scss';
import DebugSlide from '../../debug-slide/component.DebugSlide';
import KennisDelingSlide from "../../kennisdeling-slide/component.KennisdelingSlide";

function Slideshow({SecondsBetweenSlides}) {
  // Slides information, should later be moved to other file.
  const [data, setData] = useState({});
  const getData = async (id) => {
    const response = await fetch('http://145.89.192.107/api/kennisdeling/${id}');
    const singleData = await response.json();
    setData(singleData[0]);
  }

  getData(13);
  getData(17);

  const videoProps = {
    vSrc: { src: "videos/DebugSlideVideo.mp4" },
    vType: { type: "video/mp4" },
    vWidth: 640,
    vHeight: 360,
    vAutoplay: true,
    vControls: false,
    vMuted: true
  };
  const debugSlideInfo = {
    ScreenName: 'Screen 1',
    GroupName: 'Group Debugslide',
    CurrentSlide: 'Debugslide',
    VideoAtributes: videoProps
  };
  const kennisDelingInfo = {
    Subject: data["onderwerp"],
    Speaker: data["spreker"],
    Location: data["locatie"],
    Time: data["tijd"],
    Datum: data["datum"],
    Details: data["details"]
  };
  const kennisDelingInfoDupe = {
    Subject: data["onderwerp"],
    Speaker: data["spreker"],
    Location: data["locatie"],
    Time: data["tijd"],
    Datum: data["datum"],
    Details: data["details"]
  };

  // Slide Show Logic all code under this comment
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Needs to be able to get Slide array in the future instead of having hard coded slides
  const components = [
    <DebugSlide {...debugSlideInfo}/>, 
    <KennisDelingSlide {...kennisDelingInfo}/>,
    <KennisDelingSlide {...kennisDelingInfoDupe}/>
  ];

  useEffect(() => {
    
    console.log(data["onderwerp"])

    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % components.length);
    }, SecondsBetweenSlides*1000);

    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
        setCurrentIndex((currentIndex - 1 + components.length) % components.length);
      } else if (event.keyCode === 39) { // Right arrow key
        setCurrentIndex((currentIndex + 1) % components.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, components]);

  return (
    <>
      {components[currentIndex]}
    </>
  );
}

export default Slideshow;