import React from 'react';
import './ProjectShowcaseSlide2.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import './projectshowcase1.png'

function ProjectShowcaseSlide2({slideData}) {
  return (
  <>
    <div className="projectshowcase-container">
        <div className="projectshowcase-bar">
            <div class="projectshowcase-logo">
                <img src="./projectshowcase1.png" alt="Open-ICT logo" />
            </div>   
            <div class="projectshowcase-headline">
                <h3><span class="project">Project</span><span class="showcase">Showcase</span></h3>
            </div>
        </div>

        <div className="projectshowcase-grid">
            <div className="projectshowcase-foto">
            <img src="projectshowcase1.png" alt="Open-ICT logo" />
            </div>
            <div className="projectshowcase-info">
                <div className="projectshowcase-gegevens1">
                    <div className="projectshowcase-titel">
                        <p>Open-ICT Info Scherm</p>
                    </div>
                    <div className="projectshowcase-leden">
                        <p>Jesse, Owens, Ishak, Timo, Wail en Milan</p>
                    </div>
                </div>
                <div className="projectshowcase-tekst">
                    <p>Het magische scherm gloeide zachtjes, onthullend een wereld van kennis. Met elke aanraking dansten letters en beelden over het oppervlak, brengend wat de geest verlangde. Van encyclopedische feiten tot verhalen en foto's, het scherm was een venster naar oneindige informatie, gekoesterd door nieuwsgierige geesten.</p>
                </div>
                <div className="projectshowcase-opdrachtgever">
                    <p>Inge en Bernard</p>
                </div>
            </div>
        </div>
    </div>
  </>
   
  );
}

export default ProjectShowcaseSlide2;