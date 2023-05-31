import { useEffect } from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import GetCookies from '../../Cookies';

const GlobalThemeFetcher = () => {

  const { setTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    let currentTheme=GetCookies();
    setTheme(currentTheme);
  }, []);

}

export default GlobalThemeFetcher;