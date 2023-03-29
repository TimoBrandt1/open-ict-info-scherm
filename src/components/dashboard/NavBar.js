import React from "react";
import './NavBar.scss';
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