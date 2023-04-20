import "./App.css";
import axios from "axios";
import shortid from "shortid";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const getRandomKey = () => {
    return shortid.generate();
  };

  const getData = async (path) => {
    try {
      const response = await axios.get(`http://localhost:8080/${path}`);
      setError(null);
      setData(response);
    } catch (error) {
      setData({});
      setError(error);
      console.log(error.message);
    }
  };

  return (
    <div className="app_container">
      <div className="app_wrapper">
        <div className="page_text" key={getRandomKey()}>
          <p>
            {error ? <p className="error"> {error.message} </p> : null}
            {Object.keys(data).length > 0 ? (
              <p> {data.data} </p>
            ) : (
              <p>Get Data From Rust</p>
            )}
          </p>
        </div>
        <div className="button_nav">
          <button onClick={() => getData("")}>Home</button>
          <button onClick={() => getData("about")}>About</button>
          <button onClick={() => getData("contact")}>Contact</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
