import React from "react";

import Hero from "../components/Hero/Hero";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import "./pages.css";

import Slider1 from "../components/Slider/Slider1";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Hero />
      <center style={{ padding: "35vh 0 20vh 0" }} className="HomePage_center">
        <Slider1 />
      </center>
      <Hero2 />
    </div>
  );
};

export default HomePage;
