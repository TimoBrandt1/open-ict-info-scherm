import React from "react";
import SlideOverzicht from '../components/slide-overzicht/component.SlideOverzicht';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

const SlideBeheer = () => {
  return (
    <div>
      <GlobalThemeFetcher/>
      <SlideOverzicht src="/slide-overzicht"/>
    </div>
  )
};

export default SlideBeheer;
