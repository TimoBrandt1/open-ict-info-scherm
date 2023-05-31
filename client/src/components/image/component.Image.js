import React from 'react';
import './style.Image.scss';

function Image({Src, Alt}) {
  return (
      <img src={process.env.PUBLIC_URL + Src?.src} alt={Alt}/>
  );
}

export default Image;