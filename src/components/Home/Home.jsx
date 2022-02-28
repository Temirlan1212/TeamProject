import React from "react";
import video from "../../assets/video1.mp4";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <div style={{ height: "533px" }}>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "680px",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
          src={video}
        ></video>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
