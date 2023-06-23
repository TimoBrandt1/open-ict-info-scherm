import React from 'react';
import './style.Image.scss';

function Image({Src, Alt, ClassName}) {
  return (
      <div className={ClassName}>
      <img src={process.env.PUBLIC_URL + Src?.src} alt={Alt}/> 
      </div>

      
  );
}

export default Image;