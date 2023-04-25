import React from 'react';
import './style.GroepOverzicht.scss';
import { useState, useEffect } from 'react'

import {TempData} from '../TempData.js';







function GroepOverzicht() {
  //fetches array 'slides'
  const [slides, setData] = useState([TempData]); // array of objects


  const [slidesOrder, setSlides] = useState(slides)

  useEffect(() => {
    setData(TempData);
    setSlides(TempData);
  }, []);


  function addSort(filter) {
    document.getElementById("sorteren").value = filter
  }


  function sort(filter) {

    let slidesOrder = slides;
   
    if (filter.includes("A")){
        slidesOrder.sort(function (a, b) {
          if (a.titel < b.titel) {
            return -1;
          }
          if (a.titel > b.titel) {
            return 1;
          }
          return 0;
        });
    } 
    if (filter.includes("D")){
      slidesOrder.sort(function (a, b) {
        if (a.datum < b.datum) {
          return -1;
        }
        if (a.datum > b.datum) {
          return 1;
        }
        return 0;
      });
    } 
  if (filter.includes("-")){
    slidesOrder = slidesOrder.reverse();
  }

  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  console.log("Searching for "+searchInput)

  let filteredArray = new Array();
  console.log(filteredArray)
  console.log("^^^")
  
  Array.from(Array(slidesOrder.length).keys()).map((id) => {
    if (slidesOrder[id].titel.toLowerCase().includes(searchInput)) {
      filteredArray.push (slidesOrder[id])
    }
  })

  setSlides(filteredArray)
  };


  return (
    <div className="groepOverzicht">
      
      <container>  
      <div className='filters'>
        <select class="input" name="sorteren" id="sorteren" onChange={(event) => addSort(event.target.value)& sort(event.target.value)}>
          <option value="A+">Alfabetisch (A-Z)</option>
          <option value="A-">Alfabetisch (Z-A)</option>
          <option value="D+">Datum (vroegst eerst)</option>
          <option value="D-">Datum (laatst eerst)</option>
        </select>
        <input class="input" id="searchInput" type="text" placeholder="Search" onChange={(event) => sort(event.target.value)}/>
      </div>
      <div id='overzicht'>
        {Array.from(Array(slidesOrder.length).keys()).map((id) => (
                <scr>
                  <div className='scherm'>
                  <a href={ '/GroepEdit?GroepId=' + slidesOrder[id].id }><div class='optie' >E</div></a>
                    <div class='optie'>i</div>
                    <div class='optie'>D</div>
                  </div>
                  
                    <br/>{(slidesOrder[id].titel)}
                    <br/>{(slidesOrder[id].datum)}
                
                </scr>
            ))}
      </div>

      </container>
    </div>
  );
}

export default GroepOverzicht;