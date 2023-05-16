import React, { useContext, useRef, useState } from "react";
import {
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { LogoSVG } from "../../assets";

/* Icons */
import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { SDivider } from "../Layout/styles";
import { MdAreaChart, MdLogout } from "react-icons/md";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      //Search functionality yes
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={LogoSVG} alt="HU Logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => {
        return (
          <SLinkContainer key={label} isActive={pathname === to}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  {/* If notification is 0, do not display : */}
                  {!!notification && (
                    <SLinkNotification>{notification}</SLinkNotification>
                  )}
                </>
              )}
            </SLink>
          </SLinkContainer>
        );
      })}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => {
        return (
          <SLinkContainer key={label}>
            <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
            </SLink>
          </SLinkContainer>
        );
      })}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Slides",
    icon: <MdAreaChart />,
    to: "/slide-beheer",
    notification: 2,
  },
  {
    label: "Groepen",
    icon: <AiOutlineHome />,
    to: "/??",
    notification: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

export default Sidebar;
