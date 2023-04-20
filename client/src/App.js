import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState({});

  const getHome = async () => {
    const response = await axios.get("http://localhost:8080/");
    setData(response);
  };

  const getAbout = async () => {
    const response = await axios.get("http://localhost:8080/about");
    setData(response);
  };

  const getContact = async () => {
    const response = await axios.get("http://localhost:8080/contact");
    setData(response);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <p>
        {Object.keys(data).length === 0 ? (
          <p>Get data from rust</p>
        ) : (
          <p> {data.data} </p>
        )}
      </p>
      <button onClick={() => getHome()}>Home</button>
      <button onClick={() => getAbout()}>About</button>
      <button onClick={() => getContact()}>Contact</button>
    </div>
  );
}

export default App;
