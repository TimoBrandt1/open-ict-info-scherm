import React, { useContext } from "react";
import { ThemeContext } from './App';



const GetCookies = () => {

    // const { setTheme, theme } = useContext(ThemeContext);

    let filter= "theme="
    const cDecoded = decodeURIComponent(document.cookie).split('; ');
    
    let res;
    
    cDecoded.forEach(val => {
      if (val.indexOf(filter) == 0) res = val.substring(filter.length);
    })
    if (res == undefined) {
      res = "light";
    }
    const currentTheme=res;
    console.log("Current Theme : " + currentTheme);

    // setTheme(currentTheme);
  
    return currentTheme;
}

export default GetCookies;