import React from 'react';
import './style.TextBlock.scss';

function TextBlock({blockText, titleSize}) {
  return (
      <h3 className='block-text'>{blockText}</h3>
  );
}

export default TextBlock;