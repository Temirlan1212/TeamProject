import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const data = await fetch("https://cep.awesomeapi.com.br/json/37500290");
    const res = await data.json();
    console.log(res);
    setData(res);
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (data) {
      setIsLoading(true);
    }
  }, [data]);
  return isLoading ? (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        paddingTop: "40vh",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <center>
        <Loader />
      </center>
    </div>
  ) : (
    <div className="container"></div>
  );
}
