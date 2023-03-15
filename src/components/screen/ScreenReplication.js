import React from 'react';
import './ScreenReplication.css';

function ScreenReplication() {
  return (
    <div class="screenReplication-wrap">
      <iframe class="wrapped-iframe"
      src="http://localhost:3000/Screen"
      allowFullScreen="true"
      scrolling='no'
      title="Example Website"
      />
    </div>
  );
}

export default ScreenReplication;