import React from "react";
import video from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const Home = () => {
  return (
    <div sx={{ marginLeft: "100px", position: "relative", width: "100%" }}>
      <div>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100vh",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "11",
          }}
          src={video2}
        ></video>

        {/* <video autoPlay muted loop>
          <source src={video2} style={{ width: "100%" }}></source>
        </video> */}
      </div>
    </div>
  );
};

export default Home;
