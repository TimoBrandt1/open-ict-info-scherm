import React from 'react';
import './style.KennisdelingSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'

function KennisDelingSlide({Subject,Speaker,Time,Location,Details}) {
  return (
    <div class="kennisdeling-wrapper">
      <MainTitle titleText={"Kennisdeling Page"} titleSize={'h1'} className={"main-title"}/>
      <TextBlock blockText={"Subject: "+ Subject} titleSize={'h3'}/>
      <TextBlock blockText={"Speaker: "+ Speaker} titleSize={'h3'}/>
      <TextBlock blockText={"Time: "+ Time} titleSize={'h3'}/>
      <TextBlock blockText={"Location: "+ Location} titleSize={'h3'}/>
      <TextBlock blockText={"Details: "+ Details} titleSize={'h3'}/>
    </div>
  );
}

export default KennisDelingSlide;