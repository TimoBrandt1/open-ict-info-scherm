import React from 'react';
import './style.KennisdelingSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'

function KennisDelingSlide({slideData}) {
  return (
    <div className="kennisdeling-wrapper">
      <MainTitle titleText={"Kennisdeling Page"} titleSize={'h1'} className={"main-title"}/>
      {slideData.map((slide, index) => (
        <div className={`kennisdeling-${index+1}`} key={index}>
          <TextBlock blockText={"Subject: "+ slide.Subject} titleSize={'h3'}/>
          <TextBlock blockText={"Speaker: "+ slide.Speaker} titleSize={'h3'}/>
          <TextBlock blockText={"Location: "+ slide.Location} titleSize={'h3'}/>
          <TextBlock blockText={"Time: "+ slide.Time} titleSize={'h3'}/>
          <TextBlock blockText={"Datum: "+ slide.Datum} titleSize={'h3'}/>
          <TextBlock blockText={"Details: "+ slide.Details} titleSize={'h3'}/>
        </div>
      ))}
    </div>
  );
}

export default KennisDelingSlide;