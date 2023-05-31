import React, { useState, useEffect } from "react";
import './style.SlideShow_Logic.scss';
import DebugSlide from '../../debug-slide/component.DebugSlide';
import KennisDelingSlide from "../../kennisdeling-slide/component.KennisdelingSlide";

function Slideshow({SecondsBetweenSlides}) {
  // Slides information, should later be moved to other file.
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  
  const getData = async (id, setData) => {
    try {
      const response = await fetch(`http://145.89.192.107/api/kennisdeling/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const singleData = await response.json();
      setData(singleData[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as appropriate for your app
    }
  };
  
  useEffect(() => {
    Promise.all([
      getData(13, setData1),
      getData(17, setData2)
    ]).catch(error => console.error('Error fetching data:', error));
  }, []);
  

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
    Subject: data1.onderwerp || "",
    Speaker: data1.spreker || "",
    Location: data1.locatie || "",
    Time: data1.tijd || "",
    Datum: data1.datum || "",
    Details: data1.details || ""
  };

  const kennisDelingInfoDupe = {
    Subject: data2.onderwerp || "",
    Speaker: data2.spreker || "",
    Location: data2.locatie || "",
    Time: data2.tijd || "",
    Datum: data2.datum || "",
    Details: data2.details || ""
  };
  
  const slides = [
    <DebugSlide {...debugSlideInfo} />,
    <KennisDelingSlide/>,
    // <KennisDelingSlide {...kennisDelingInfo} />,
    // <KennisDelingSlide {...kennisDelingInfoDupe} />
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getData(13, setData1);
      getData(17, setData2);
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, SecondsBetweenSlides*1000);

    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
      } else if (event.keyCode === 39) { // Right arrow key
        setCurrentIndex((currentIndex + 1) % slides.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, SecondsBetweenSlides, slides]);
  
  return (
    <>
      {slides[currentIndex]}
    </>
  );
}

export default Slideshow;