import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { contrastTheme, darkTheme, lightTheme, skyTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { Helmet } from "react-helmet";
import Layout from "./components/Layout/Layout";
import RoutesLink from "./RoutesLink";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
   const themeStyle = 
   theme === "light" ? lightTheme : 
   theme === "dark" ? darkTheme : 
   theme === "contrast" ? contrastTheme :
   skyTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Open-ICT Scherm</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            <RoutesLink />
          </Layout>
        </>
      </ThemeProvider>
      ;
    </ThemeContext.Provider>
  );
};

export default App;
