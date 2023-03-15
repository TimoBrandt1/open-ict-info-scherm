import React from "react";
import './Layout.css';
import {Outlet} from "react-router-dom";
import Navbar from "../dashboard/NavBar";

const Layout = () => {
  return (
    <>
      
      <Outlet />
    </>
  );
};

export default Layout;