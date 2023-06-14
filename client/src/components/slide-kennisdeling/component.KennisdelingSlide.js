import React from 'react';
import './style.KennisdelingSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'

function KennisDelingSlide({slideData}) {
  return (
    <div className="kennisdeling-wrapper">
      <MainTitle titleText={"Kennisdelingen"} titleSize={'h1'} className={"main-title"}/>
      <div class= "kennisdeling-miniwrapper">
      {slideData.map((slide, index) => (
        <div className={`kennisdeling`} key={index}>
          <TextBlock blockText={"Kennisdeling "+ slide.Subject} titleSize={'h3'} className={"primary"}/>
          <TextBlock blockText={"Spreker: "+ slide.Speaker} titleSize={'h3'}/>
          <TextBlock blockText={slide.Location + ", " + slide. Datum + ", " + slide.Time} titleSize={'h3'}/><br/>
          <TextBlock blockText={slide.Details} titleSize={'h3'}/>
        </div>
      ))}
      </div>
    </div>
  );
}

export default KennisDelingSlide;