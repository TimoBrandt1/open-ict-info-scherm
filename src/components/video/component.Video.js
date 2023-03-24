import React from 'react';
import './style.Video.scss';

function Video({vSrc,vType,vWidth,vHeight,vAutoplay,vControls,vMuted}) {
  return (
      <video width={vWidth} height={vHeight} >
        <source src={vSrc} type={vType}></source>
        Your browser does not support the video tag.
      </video>
  );
}

export default Video;