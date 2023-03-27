import React from 'react';

function Heading({ as: Element = 'h1', children }) {
  return <Element>{children}</Element>;
}

export default Heading;