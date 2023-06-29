import React, { useState, useEffect } from "react";
import './style.SlideShow_Logic.scss';
import DebugSlide from '../../slide-debug/component.DebugSlide';
import KennisDelingSlide from "../../slide-kennisdeling/component.KennisdelingSlide";
import ProjectShowcaseSlide from "../../slide-project-showcase/component.ProjectShowcaseSlide";
import SlideProjectShowcaseInfo from '../../../json/showcaseProjecten.json';
import KennisDelingSlideInfo from '../../../json/kennisdelingen.json';
import KennisDelingSlideInfo2 from '../../../json/kennisdelingen2.json';
import DebugSlideInfo from '../../../json/debugSlideInfo.json';
import KennisdelingSlide2 from '../../../components/slide-kennisdeling/KennisdelingSlide2'
import ProjectShowcaseSlide2 from '../../slide-project-showcase/ProjectShowcaseSlide2'
import AfbeeldingSlide from '../../slide-afbeelding/component.ImageSlide'

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
  
  // Array of slides
  const slides = [
    <DebugSlide {...DebugSlideInfo} />,
    // <KennisDelingSlide slideData={KennisDelingSlideInfo} />,
    <KennisdelingSlide2 slideData={KennisDelingSlideInfo} />,
    // <KennisdelingSlide2 slideData={KennisDelingSlideInfo2} />,
    // <ProjectShowcaseSlide {...SlideProjectShowcaseInfo}/>,
    <ProjectShowcaseSlide2 {...SlideProjectShowcaseInfo[0]}/>,
    <ProjectShowcaseSlide2 {...SlideProjectShowcaseInfo[1]}/>,
    <AfbeeldingSlide {...AfbeeldingSlide}/>
 





    // <KennisDelingSlide {...kennisDelingInfoDupe} />
  ];
  
  // Index of the currently displayed slide
  const [currentIndex, setCurrentIndex] = useState(0);


  // Automatically switch to the next slide after a specified number of seconds,
  // and allow manual navigation using arrow keys
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getData(13, setData1);
      getData(17, setData2);
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, SecondsBetweenSlides*1500);

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