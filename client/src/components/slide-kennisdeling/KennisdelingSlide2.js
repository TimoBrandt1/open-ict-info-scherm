import React from 'react';
import './KennisdelingSlide2.scss';
import MainTitle from '../main-title/component.MainTitle'
import TextBlock from '../text-block/component.TextBlock'
import '../../assets/open-ict-logo.png'

function KennisDelingSlide({slideData}) {
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
            <div className="kennisdeling-container">
              <div className="kennisdeling-plaatje">
              <img src="kennisdeling-foto-1.png" alt="Kennisdeling foto" />
              </div>
              <div className="kennisdeling-info">
                <div className="kennisdeling-gegevens1">
                  <div className="kennisdeling-titel">
                    <p>Machine Learning</p>
                  </div>
                  <div className="kennisdeling-spreker">
                    <p>Jesse en Owens</p>
                  </div>
                </div>
                <div className="kennisdeling-tekst">
                  <p>Machine learning is heel leuk om naar te kijken, kom zeker weten naar ons toe!</p>
                </div>
                <div className="kennisdeling-gegevens2">
                  <div className="kennisdeling-lokaal">
                    <p>Ruimte 5.075</p>
                  </div>
                  <div className="kennisdeling-gegevens2-scheiding">
                    <p>|</p>
                  </div>
                  <div className="kennisdeling-tijd">
                    <p>1 Juni - 11:15</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kennisdeling-container">
              <div className="kennisdeling-plaatje">
              <img src="kennisdeling-foto-1.png" alt="Kennisdeling foto" />
              </div>
              <div className="kennisdeling-info">
                <div className="kennisdeling-gegevens1">
                  <div className="kennisdeling-titel">
                    <p>Machine Learning</p>
                  </div>
                  <div className="kennisdeling-spreker">
                    <p>Jesse en Owens</p>
                  </div>
                </div>
                <div className="kennisdeling-tekst">
                  <p>Machine learning is heel leuk om naar te kijken, kom zeker weten naar ons toe!</p>
                </div>
                <div className="kennisdeling-gegevens2">
                  <div className="kennisdeling-lokaal">
                    <p>Ruimte 5.075</p>
                  </div>
                  <div className="kennisdeling-gegevens2-scheiding">
                    <p>|</p>
                  </div>
                  <div className="kennisdeling-tijd">
                    <p>1 Juni - 11:15</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kennisdeling-container">
              <div className="kennisdeling-plaatje">
              <img src="kennisdeling-foto-1.png" alt="Kennisdeling foto" />
              </div>
              <div className="kennisdeling-info">
                <div className="kennisdeling-gegevens1">
                  <div className="kennisdeling-titel">
                    <p>Machine Learning</p>
                  </div>
                  <div className="kennisdeling-spreker">
                    <p>Jesse en Owens</p>
                  </div>
                </div>
                <div className="kennisdeling-tekst">
                  <p>Machine learning is heel leuk om naar te kijken, kom zeker weten naar ons toe!</p>
                </div>
                <div className="kennisdeling-gegevens2">
                  <div className="kennisdeling-lokaal">
                    <p>Ruimte 5.075</p>
                  </div>
                  <div className="kennisdeling-gegevens2-scheiding">
                    <p>|</p>
                  </div>
                  <div className="kennisdeling-tijd">
                    <p>1 Juni - 11:15</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kennisdeling-container">
              <div className="kennisdeling-plaatje">
              <img src="kennisdeling-foto-1.png" alt="Kennisdeling foto" />
              </div>
              <div className="kennisdeling-info">
                <div className="kennisdeling-gegevens1">
                  <div className="kennisdeling-titel">
                    <p>Machine Learning</p>
                  </div>
                  <div className="kennisdeling-spreker">
                    <p>Jesse en Owens</p>
                  </div>
                </div>
                <div className="kennisdeling-tekst">
                  <p>Machine learning is heel leuk om naar te kijken, kom zeker weten naar ons toe!</p>
                </div>
                <div className="kennisdeling-gegevens2">
                  <div className="kennisdeling-lokaal">
                    <p>Ruimte 5.075</p>
                  </div>
                  <div className="kennisdeling-gegevens2-scheiding">
                    <p>|</p>
                  </div>
                  <div className="kennisdeling-tijd">
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