import React from "react";
import { Route, Routes } from "react-router-dom";

//Begin of Pages import
import HomePage from "./pages/HomePage";
import SlideAanmaken from "./pages/SlideAanmaken";
import SlideAanpassen from "./pages/SlideAanpassen";
import SlideBeheer from "./pages/SlideBeheer";

//End of Pages import

const RoutesLink = () => {
  return (
    <Routes>
      {/* Home Page Router */}
      <Route exact path="/" element={<HomePage />} />
      {/* Import Routes here : */}
      <Route exact path="/slide-beheer" element={<SlideBeheer />} />
      {/* Import Routes here : */}
      <Route exact path="/slide-aanmaken" element={<SlideAanmaken />} />
      {/* Import Routes here : */}
      <Route exact path="/slide-aanpassen" element={<SlideAanpassen />} />
    </Routes>
  );
};

export default RoutesLink;
//hi