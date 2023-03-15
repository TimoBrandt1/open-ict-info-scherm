import React from "react";
import './NavBar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/Screen">Screen</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;