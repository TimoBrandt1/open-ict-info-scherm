import React from 'react';
import './ScreenReplication.css';
import { useState } from 'react'

function ScreenReplication(src) {
  const [iframe, setIframe] = useState(1);

  return (
    <div class="screenReplication-wrap">
      <iframe class="wrapped-iframe"
      src={src.src}
      allowFullScreen="true"
      scrolling='no'
      title="Example Website"
      />
    </div>
  );
}

export default ScreenReplication;