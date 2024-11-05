import React from 'react';
import '../Styles/Loader.css';
import loader from "../images/Loader.png";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={loader} className="loader-icon" alt="Loading" />
      </div>
    </div>
  );
};

export default Loader;