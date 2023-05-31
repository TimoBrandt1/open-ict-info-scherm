import React from "react";
import GroepOverzicht from '../components/groep-overzicht/component.GroepOverzicht';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

const SlideBeheer = () => {
  return (
    <div>
    <GlobalThemeFetcher/>
      <GroepOverzicht src="/groep-overzicht"/>
    </div>
  )
};

export default SlideBeheer;
