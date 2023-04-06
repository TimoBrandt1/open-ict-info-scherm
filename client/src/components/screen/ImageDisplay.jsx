import React from 'react';
import { Buffer } from 'buffer';
import { useState, useEffect } from 'react';


function ImageDisplay({ buffer }) {

  const [imageUrl, setImageUrl] = useState('');

  useEffect (() => {
    const imageUrl_ = `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
    setImageUrl(imageUrl_);
  }, [buffer]);



  return (
    <img src={imageUrl} alt="Image" />
  );
}

export default ImageDisplay;