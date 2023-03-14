import React from 'react';

function ScreenReplication() {
  return (
    <iframe
      src="http://localhost:3000/"
      allowFullScreen="true"
      scrolling='no'
      title="Example Website"
      width="500px"
      height="600px"
      frameBorder="0"
    />
  );
}

export default ScreenReplication;