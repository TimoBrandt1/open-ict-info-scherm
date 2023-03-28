import React from "react";
import './style.Navbar.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        {/* Startpagina dashboard DOM */}
        <li>
          <Link to="/">Dashboard startpagina</Link>
        </li>
        {/* Link To Screen page */}
        <li>
          <Link to="/Screen">Scherm pagina</Link>
        </li> 
      </ul>
      <ul>
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
          <Link to="/">Groep Beheer</Link>
          <ul>
            <li>
              <Link to="/">Groep toevoegen</Link>
            </li>
          </ul>
        </li>
        {/* Slides Navigation DOM*/}
        <li>
          <Link to="/">Slide Beheer</Link>
          <ul>
            <li>
              <Link to="/">Slide toevoegen</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
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