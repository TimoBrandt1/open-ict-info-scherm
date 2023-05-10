import React from 'react';
import './style.ProjectShowcaseSlide.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import Image from '../image/component.Image'

function ProjectShowcaseSlide({Project,Squad,Details,Opdrachtgever,Src,Alt}) {
  return (
    <div className="projectshowcase-wrapper">
      <MainTitle titleText={"Project showcase page"} titleSize={'h1'} className={"main-title"}/>
        <div className={`project-showcase`}>
        <Image Src={Src} Alt={Alt}/>
          <TextBlock blockText={"Project: "+ Project} titleSize={'h3'}/>  
          <TextBlock blockText={"Squad: "+ Squad} titleSize={'h3'}/>
          <TextBlock blockText={"Details: "+ Details} titleSize={'h3'}/>
          <TextBlock blockText={"Opdrachtgever: "+ Opdrachtgever} titleSize={'h3'}/>
        </div>
    </div>
  );
}

export default ProjectShowcaseSlide;