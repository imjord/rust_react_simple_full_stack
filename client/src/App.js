import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/");
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
      <button onClick={() => getData()}>Get rust</button>
    </div>
  );
}

export default App;
