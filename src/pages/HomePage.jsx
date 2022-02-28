import React from "react";
import video from "../assets/video1.mp4";

const HomePage = () => {
  return (
    <div style={{ height: "3000px" }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
        src={video}
      ></video>
    </div>
  );
};

export default HomePage;
