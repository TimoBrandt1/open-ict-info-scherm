import React from "react";
import { SLayout, SMain } from "./styles";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
  if(props.nav == "false"){
    return (
      <SLayout>
        <SMain>{props.children}</SMain>
      </SLayout>
    );
  }else{
    return (
      <SLayout>
        <Sidebar />
        <SMain>{props.children}</SMain>
      </SLayout>
    );
  };
  }

export default Layout;
