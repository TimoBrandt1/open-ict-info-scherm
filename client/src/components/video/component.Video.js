import React from 'react';
import './style.Video.scss';

function Video({vSrc, vType, vWidth, vHeight, vAutoplay, vControls, vMuted, vLoop}) {
  return (
      <video width={vWidth} height={vHeight} autoPlay={vAutoplay} controls={vControls} muted={vMuted} loop={vLoop}>
        <source src={process.env.PUBLIC_URL + vSrc?.src} type={vType?.type} />
        Your browser does not support the video tag.
      </video>
  );
}

export default Video;