import React from 'react';
import './style.GroepEdit.scss';
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"

import {TempData} from '../TempData.js';



function GroepEdit() {
  
  const location = useLocation()
  const groepNR = new URLSearchParams(location.search).get("GroepId")
  console.log(groepNR)


useEffect(() => {
  getGroepContent(TempData[groepNR].titel, TempData[groepNR].slides);
}, []);

function getGroepContent(naam, slides) {

  document.getElementById('naam').value = naam;
  document.getElementById('slides').value = slides;
}


    return (
    <div className="groepEdit">
      <h1>Edit Groep</h1><br/>
      Naam:
      <input id='naam' class="input" type="text" placeholder="Naam..."/><br/>
      Slides:
      <input id='slides' class="input" type="text" placeholder="ID slides..."/>(Geef ID van slides, gescheiden met komma.)<br/>
    
    <button></button>
    </div>
  );
}

export default GroepEdit;