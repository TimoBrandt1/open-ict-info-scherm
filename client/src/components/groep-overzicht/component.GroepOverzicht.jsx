import React from 'react';
import './style.GroepOverzicht.scss';
import { useState, useEffect } from 'react'








function GroepOverzicht() {
  //fetches array 'groups'
  const [groups, setData] = useState([]); //array of objects
  const getData = async () => {
          const response = await fetch('http://145.89.192.107/api/kennisdeling');
          const singleData = await response.json();
          setData(singleData);
          setGroups(singleData)
  }
  
  const [groupsOrder, setGroups] = useState(groups)

  useEffect(() => {
    getData();
    setGroups(groups);
  }, []);


  function addSort(filter) {
    document.getElementById("enter").value = filter
  }


  function sort(filter) {

    let groupsOrder = groups;
   
    if (filter.includes("A")){
      groupsOrder.sort(function (a, b) {
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
      groupsOrder.sort(function (a, b) {
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
    groupsOrder = groupsOrder.reverse();
  }

  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  console.log("Searching for "+searchInput)

  let filteredArray = new Array();
  console.log(filteredArray)
  console.log("^^^")
  
  Array.from(Array(groupsOrder.length).keys()).map((id) => {
    if (groupsOrder[id].spreker.toLowerCase().includes(searchInput)) {
      filteredArray.push (groupsOrder[id])
    }
  })

  setGroups(filteredArray)
  };


  return (
    <div className="GroepOverzicht">
      
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
        {Array.from(Array(groupsOrder.length).keys()).map((id) => (
                <scr>
                  <div className='scherm'/>
                  
                    <br/>{(groupsOrder[id].spreker)}
                    <br/>{(groupsOrder[id].datum)}
                
                </scr>
            ))}
      </div>

      </container>
    </div>
  );
}

export default GroepOverzicht;