import React from 'react';

function Heading({ as: Element = 'h1', children, className }) {
  return <Element class={className}>{children}</Element>;
}

export default Heading;