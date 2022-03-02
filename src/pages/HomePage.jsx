import React from "react";

import Hero from "../components/Hero/Hero";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";

const HomePage = () => {
  return (
    <div
      style={{
        marginTop: "570px",
      }}
    >
      <Home />
      <Hero />
      {/* <Hero2 /> */}
    </div>
  );
};

export default HomePage;
