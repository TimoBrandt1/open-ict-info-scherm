import React from "react";
import './style.Layout.scss';
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;