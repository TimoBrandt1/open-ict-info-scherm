import React from "react";
import Settings from '../components/settings/component.Settings';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

const SlideBeheer = () => {
  return (
    <div>
      <GlobalThemeFetcher/>
      <Settings src="/settings"/>
    </div>
  )
};

export default SlideBeheer;
