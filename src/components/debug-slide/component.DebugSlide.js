import React from 'react';
import './style.DebugSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import Video from '../video/component.Video'

function DebugSlide({ScreenName,GroupName,CurrentSlide}) {
  return (
    <div class="debug-content">
      <MainTitle titleText={"Waiting for slides..."} titleSize={''}/>
      <Video vSrc={"../../../public/videos/DebugSlideVideo.mp4"} vType={"video/mp4"} vWidth={"500"} vHeight={"500"}/>
      <TextBlock blockText={"Screen name: "+ ScreenName} titleSize={''}/>
      <TextBlock blockText={"Group name: "+ GroupName} titleSize={''}/>
      <TextBlock blockText={"Current slide: "+ CurrentSlide} titleSize={''}/>
    </div>
  );
}

export default DebugSlide;