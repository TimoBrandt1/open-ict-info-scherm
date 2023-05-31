import React from "react";
import FormKennisdeling from '../components/forms/FormKennisdeling';
import GlobalThemeFetcher from '../components/global-theme-fetcher/component.GlobalThemeFetcher';

const SlideBeheer = () => {
  return (
    <div>
      <GlobalThemeFetcher/>
      <FormKennisdeling src="/FormKennisdeling"/>
    </div>
  )
};

export default SlideBeheer;
