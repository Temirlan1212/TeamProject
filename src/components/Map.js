import React from "react";

const map = () => {
  return (
    <center>
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11697.164363479633!2d74.58146585!3d42.8666998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83dd9616c6f%3A0x31e0b50d909a9d17!2sAqua%20Lab!5e0!3m2!1sru!2skg!4v1646248141948!5m2!1sru!2skg"
        width="600"
        height="450"
        style={{
          border: "0;",
          width: "75vw",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "50px",
        }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </center>
  );
};

export default map;
