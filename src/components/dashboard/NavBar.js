import React from "react";
import './NavBar.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="closeable">
      <close>
        <span>close</span>
      </close>
      <ul class="closeable">
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