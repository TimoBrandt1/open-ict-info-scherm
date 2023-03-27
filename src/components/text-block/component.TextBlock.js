import React from 'react';
import './style.TextBlock.scss';
import Heading from '../heading/component.Heading';

function TextBlock({blockText, titleSize,className}) {
  return (
    <Heading as={titleSize} className={className}>{blockText}</Heading>
  );
}

export default TextBlock;