import React from 'react';
import { Buffer } from 'buffer';
import { useState, useEffect } from 'react';


function ImageDisplay({ buffer }) {

  const [imageUrl, setImageUrl] = useState('');


  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect (() => {
    const base64Flag = 'data:image/jpeg;base64,';
    const imageData = new Uint8Array(buffer);
    setImageUrl(base64Flag + "${btoa(String.fromCharCode(...new Uint8Array(imageData)))}");
  }, [buffer]);

  return (
    <img src={imageUrl} alt="Image" />
  );
}

export default ImageDisplay;