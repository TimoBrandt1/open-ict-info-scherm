import React from 'react';
import './style.DebugSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import Video from '../video/component.Video'

function DebugSlide({ScreenName,GroupName,CurrentSlide,VideoAtributes}) {
  return (
    <div class="debug-content">
      <Video {...VideoAtributes}/>
      <footer class="debug-information">
        <TextBlock blockText={"Screen name: "+ ScreenName} titleSize={'h3'}/>
        <TextBlock blockText={"Group name: "+ GroupName} titleSize={'h3'}/>
        <TextBlock blockText={"Current slide: "+ CurrentSlide} titleSize={'h3'}/>
      </footer>
    </div>
  );
}

export default DebugSlide;