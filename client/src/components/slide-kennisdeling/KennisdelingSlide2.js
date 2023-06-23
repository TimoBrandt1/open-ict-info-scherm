import React from 'react';
import './KennisdelingSlide2.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import '../../assets/open-ict-logo.png'
import Image from '../image/component.Image'


function KennisDelingSlide2({slideData}) {
  return (
    <div class="kennisdelingslide-container">
        <div class="kennisdelingslide-bar">
            <div class="kennisdeling-logo">
            </div>   
            <div class="kennisdelingslide-headline">
                <h3><span class="kennis">Kennis</span><span class="delingen">delingen</span></h3>
            </div>
        </div>

        <div className="kennisdeling-grid">
        {slideData.map((slide, index) => (

            <div className="kennisdeling-container">
              {/* <div className="kennisdeling-plaatje"> */}
              <Image Src={slide.Src} alt={slide.Alt} ClassName={'kennisdeling-plaatje'} />

              {/* </div> */}
              <div className="kennisdeling-info">
                <div className="kennisdeling-gegevens1">
                  <div className="kennisdeling-titel">
                    <p><TextBlock blockText={ slide.Subject} titleSize={'h3'} className={"primary"}/></p>
                  </div>
                  <div className="kennisdeling-spreker">
                    <p><TextBlock blockText={slide.Speaker} titleSize={'h3'}/></p>
                  </div>
                </div>
                <div className="kennisdeling-tekst">
                  <p><TextBlock blockText={slide.Details} titleSize={'h3'}/></p>
                </div>
                <div className="kennisdeling-gegevens2">
                  <div className="kennisdeling-lokaal">
                  <p> <TextBlock blockText={slide.Location} titleSize={'h3'}/></p>
                  </div>
                  <div className="kennisdeling-gegevens2-scheiding">
                    <p>|</p>
                  </div>
                  <div className="kennisdeling-tijd">
                  <p><TextBlock blockText={slide. Datum + ' - ' + slide.Time} titleSize={'h3'}/></p>
                  </div>
                </div>
              </div>
            </div>


))}
          </div>
                

    </div>
      
  );
}

export default KennisDelingSlide2;