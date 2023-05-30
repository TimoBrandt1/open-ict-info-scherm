import React from 'react';
import './style.GroepOverzicht.scss';
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import {TempData} from '../TempData.js';








function GroepOverzicht() {
  // //fetches array 'groups'
  // const [groups, setData] = useState([]); //array of objects
  // const getData = async () => {
  //         const response = await fetch('http://145.89.192.107/api/kennisdeling');
  //         const singleData = await response.json();
  //         setData(singleData);
  //         setGroups(singleData)
  // }
  
  // const [groupsOrder, setGroups] = useState(groups)

  // useEffect(() => {
  //   getData();
  //   setGroups(groups);
  //fetches array 'groups'
  const [groups, setData] = useState([TempData]); // array of objects


  const [groupsOrder, setGroups] = useState(groups)

  useEffect(() => {
    setData(TempData);
    setGroups(TempData);
  }, []);


  function addSort(filter) {
    document.getElementById("sorteren").value = filter
  }


  function sort(filter) {

    let groupsOrder = groups;
   
    if (filter.includes("A")){
      groupsOrder.sort(function (a, b) {
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

  const Alert = () =>{
  Swal.fire({
    title: 'Weet je het zeker?',
    text: "Je kunt dit niet ongedaan maken!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ja, verwijder het!',
    cancelButtonText: 'Annuleren'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Verwijderd!',
        'De groep is verwijderd',
        'success'
      )
    }
  })
}

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
        {Array.from(Array(groupsOrder.length).keys()).map((id) => (
                <scr>
                  <div className='scherm'>
                  <a href={ '/GroepEdit?GroepId=' + groupsOrder[id].id }><div class='optie' >E</div></a>
                    <div class='optie'>i</div>
                    <button className='optie' onClick={Alert}>D</button>
                  </div>
                  
                    <br/>{(groupsOrder[id].titel)}
                    <br/>{(groupsOrder[id].datum)}
                
                </scr>
            ))}
      </div>

      </container>
    </div>
  );
}

export default GroepOverzicht;