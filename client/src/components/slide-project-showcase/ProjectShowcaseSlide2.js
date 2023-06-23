import React from 'react';
import './ProjectShowcaseSlide2.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import './projectshowcase1.png'
import Image from '../image/component.Image'


function ProjectShowcaseSlide2({Project,Squad,Details,Opdrachtgever,Src,Alt}) {
    return (
  <>
    <div className="projectshowcase-container">
        <div className="projectshowcase-bar">
            <div class="projectshowcase-logo">
            </div>   
            <div class="projectshowcase-headline">
                <h3><span class="project">Project</span><span class="showcase">Showcase</span></h3>
            </div>
        </div>

        <div className="projectshowcase-grid">
            {/* <div className="projectshowcase-foto"> */}

            <Image Src={Src} alt={Alt} ClassName={'image-projectshowcase'} />
            {/* </div> */}
            <div className="projectshowcase-info">
                <div className="projectshowcase-gegevens1">
                    <div className="projectshowcase-titel">
                   <p> <TextBlock blockText={ Project} titleSize={'h3'}/>  </p>
                    </div>
                    <div className="projectshowcase-leden">
                    <p> <TextBlock blockText={ Squad} titleSize={'h3'}/></p>
                    </div>
                </div>
                <div className="projectshowcase-tekst">
                <p>  <TextBlock blockText={""+ Details} titleSize={'h3'}/></p>
                </div>
                <div className="projectshowcase-opdrachtgever">
                    <p><TextBlock blockText={"Opdrachtgever: "+ Opdrachtgever} titleSize={'h3'}/><br/>  </p>        
                </div>
            </div>
        </div>
    </div>
  </>
   
  );
}

export default ProjectShowcaseSlide2;