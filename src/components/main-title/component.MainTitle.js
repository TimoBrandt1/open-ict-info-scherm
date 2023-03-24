import React from 'react';
import './style.MainTitle.scss';

function MainTitle({titleText, titleSize}) {
  return (
      <h1 className='title'>{titleText}</h1>
  );
}

export default MainTitle;