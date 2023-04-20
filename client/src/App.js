import "./App.css";
import axios from "axios";
import shortid from "shortid";

import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState({});

  const getRandomKey = () => {
    return shortid.generate();
  };
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

  return (
    <div className="app_container">
      <div className="app_wrapper">
        <div className="page_text" key={getRandomKey()}>
          <p>
            {Object.keys(data).length === 0 ? (
              <p>Get data from rust</p>
            ) : (
              <p> {data.data} </p>
            )}
          </p>
        </div>
        <div className="button_nav">
          <button onClick={() => getHome()}>Home</button>
          <button onClick={() => getAbout()}>About</button>
          <button onClick={() => getContact()}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default App;
