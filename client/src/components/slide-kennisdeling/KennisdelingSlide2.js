import React from 'react';
import './KennisdelingSlide2.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'

function KennisDelingSlide({slideData}) {
  return (
    <div class="kennisdelingslide">
        <div class="kennisdelingslide-bar">
            <div class="kennisdeling-logo">
                <img src="logo1.png" alt="Open-ICT logo" />
            </div>   
            <div class="kennisdelingslide-headline">
                <h1><span class="kennis">Kennis</span><span class="delingen">delingen</span></h1>
            </div>
        </div>

        <div class="kennisdeling-grid">
            <div class="kennisdeling-container">
                <div class="kennisdeling-image">
                    <img src="pic.jpg" alt="Kennisdeling foto"/>
                </div>
                <div class="kennisdeling-gegevens2">
                    <div class="kennisdeling-titel">
                        <p>Machine Learning</p>
                    </div>
                    <div class="kennisdeling-spreker">
                        <p>Jesse en Owens</p>
                    </div>
                    <div class="kennisdeling-tekst">
                        <p>"With Qubex, we've been able to
                            achieve - and even extend - our SLA.
                            Our users are always served
                            instantly, even during peak traffic
                            hits."</p>
                    </div>
                    <div class="kennisdeling-gegevens1">
                        <div class="kennisdeling-lokaal">
                            <p>Ruimte 5.075</p>
                        </div>
                        <p class="divide"> | </p>
                        <div class="kennisdeling-datumtijd">
                            <p>1 Juni - 11:15</p>
                        </div>
                    </div>
                </div>

            </div>

            


       

        
    </div>
    </div>
  );
}

export default KennisDelingSlide;