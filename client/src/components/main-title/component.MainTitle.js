import React from 'react';
import './style.MainTitle.scss';
import Heading from '../heading/component.Heading';

function MainTitle({titleText, titleSize, className}) {
  return (
      <Heading as={titleSize} className={className}>{titleText}</Heading>
  );
}

export default MainTitle;