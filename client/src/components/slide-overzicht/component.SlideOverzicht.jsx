import React from 'react';
import './style.SlideOverzicht.scss';
import { useState, useEffect } from 'react'
import FormEdit from '../form-edit/component.FormEdit';







function SlideOverzicht() {
  //fetches array 'slides'
  const [slides, setData] = useState([]); // array of objects
  const getData = async () => {
          const response = await fetch('http://145.89.192.107/api/kennisdeling');
          const singleData = await response.json();
          setData(singleData);
          setSlides(singleData)
  }
  
  const [slidesOrder, setSlides] = useState(slides)

  useEffect(() => {
    getData();
    setSlides(slides);
  }, []);


  function addSort(filter) {
    document.getElementById("enter").value = filter
  }


  function sort(filter) {

    let slidesOrder = slides;
   
    if (filter.includes("A")){
        slidesOrder.sort(function (a, b) {
          if (a.spreker < b.spreker) {
            return -1;
          }
          if (a.spreker > b.spreker) {
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
    if (slidesOrder[id].spreker.toLowerCase().includes(searchInput)) {
      filteredArray.push (slidesOrder[id])
    }
  })

  setSlides(filteredArray)
  };


  return (
  
    
    <div className="slideOverzicht">
      
      <container>  
      <div className='filters'>
        <select name="Sorteren" id="Sorteren" onChange={(event) => addSort(event.target.value)& sort(event.target.value)}>
          <option value="A+">Alfabetisch (A-Z)</option>
          <option value="A-">Alfabetisch (Z-A)</option>
          <option value="D+">Datum (vroegst eerst)</option>
          <option value="D-">Datum (laatst eerst)</option>
        </select>
        <input id="searchInput" type="text" placeholder="Search" onChange={(event) => sort(event.target.value)}/>
        <button id="enter" value="D+" onClick={(event) => sort(event.target.value)}>filter</button>
      </div>
      <div id='overzicht'>
        {Array.from(Array(slidesOrder.length).keys()).map((id) => (
                <scr>
                  <button onClick={FormEdit(slidesOrder[id])}>
                  <div className='scherm'/>

                    <br/>{(slidesOrder[id].spreker)}
                    <br/>{(slidesOrder[id].datum)}
                  </button>

                
                </scr>
            ))}
      </div>

      </container>
    </div>
  );
}

export default SlideOverzicht;