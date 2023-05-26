import React from 'react';
import './style.Settings.scss'
import { useEffect } from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import GetCookies from '../../Cookies';

const Settings = () => {

  const { setTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    let currentTheme=GetCookies();
    setTheme(currentTheme);

    document.getElementById(currentTheme).selected = 'selected'
  }, []);


  function applyTheme(theme) {
    document.cookie = "theme="+theme+";"
    if (theme == "light") {
      document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; //resets the cookie
    }
    
    let currentTheme=GetCookies();
    setTheme(currentTheme);

  }



  return (
    <div className="settings">
      <h1>Instellingen en account</h1>
      <div>
        <h2>Website</h2>
        <select id="themeSelector" onChange={(event) => applyTheme(event.target.value)}>
          <option id="light" value="light">Licht</option>
          <option id="dark" value="dark">Donker</option>
          <option id="contrast" value="contrast">Verhoogd contrast</option>
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