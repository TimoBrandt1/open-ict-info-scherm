import React from "react";
import './style.Navbar.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";


function closeNavbar() {
  const closing = document.getElementsByClassName("closeable"); 

var opened = closing[0].classList.contains("closed");

if (opened) {
  for(let i=0; i < closing.length; i++){
    closing[i].classList.remove("closed");
    }

} else {
  console.log(closing);
  for(let i=0; i < closing.length; i++){
  closing[i].className += " closed";
  }
}

}

function Navbar() {
  return (
    <nav class="closeable">
      <close class="closeable" onClick={closeNavbar}>
      <arrow><img src={process.env.PUBLIC_URL+"images/arrow.png"} /></arrow>
      </close>
      <ul class="closeable">

        {/* Startpagina dashboard DOM */}
        <li>
          <Link to="/">Dashboard startpagina</Link>
        </li>
        {/* Link To Screen page */}
        <li>
          <Link to="/Screen">Scherm pagina</Link>
        </li> 
      </ul>
      <ul class="closeable">
        {/* Scherm Navigation DOM*/}
        <li>
          <Link to="/">Scherm Beheer</Link>
          <ul>
            <li>
              <Link to="/">Scherm toevoegen</Link>
            </li>
          </ul>
        </li>
        {/* Group Navigation DOM*/}
        <li>
          <Link to="/GroepOverzicht">Groep Beheer</Link>
          <ul>
            <li>
              <Link to="/">Groep toevoegen</Link>
            </li>
          </ul>
        </li>
        {/* Slides Navigation DOM*/}
        <li>
          <Link to="/SlideOverzicht">Slide Beheer</Link>
          <ul>
            <li>
              <Link to="/chooseform">Slide toevoegen</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="closeable">
        {/* Settings DOM */}
        <li>
          <Link to="/">Instellingen knop</Link>
        </li>
        {/* Logout DOM */}
        <li>
          <Link to="/">Uitloggen knop</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;