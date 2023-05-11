import React from 'react';
import './style.Settings.scss'
import { useEffect } from 'react'






function Settings() {

  useEffect(() => {
    let currentTheme=getTheme()
    document.getElementById('themeSelector').getElementsByTagName('option')[currentTheme].selected = 'selected'
  }, []);

  function setTheme(theme) {
    document.cookie = "theme="+theme+";"
    if (theme==="Licht") {
      document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; //resets the cookie
    }
    getTheme()

  }

  function getTheme() {
    let filter= "theme="
    const cDecoded = decodeURIComponent(document.cookie).split('; ');
    
    let res;
    
    cDecoded.forEach(val => {
      if (val.indexOf(filter) === 0) res = val.substring(filter.length);
    })
    if (res===undefined) {
      res = "0";
    }
    const currentTheme=res;
    return currentTheme;
  }

  return (
    <div className="settings">
      <h1>Instellingen en account</h1>
      <div>
        <h2>Website</h2>
        <select id="themeSelector" onChange={(event) => setTheme(event.target.value)}>
          <option value="0">Licht</option>
          <option value="1">Donker</option>
          <option value="2">Verhoogd contrast</option>
        </select>
        <h2>Account</h2>
        Emailadres machtigen<br/>
        Wachtwoord wijzigen<br/>
        <br/>
        <span style={{color: "red"}}>Account verwijderen</span>
        <h2>Privacy</h2>
        Privacy statement<br/>
        Verwijder accountgegevens<br/>
      </div>
    </div>
  );
}

export default Settings;