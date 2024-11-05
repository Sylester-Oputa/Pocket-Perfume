import React from 'react';
import './Static.css';
import Static from "./images/static.png";
import InfoIcon from '@mui/icons-material/Info';
import Footer from './Footer';

const StaticPage = () => {
  return (
    <div className="static-page-container">
      <h2>This is a static website</h2>
      <p>The button/icon below is not functional.</p>
      <img
        src={Static}
        alt="Static Page Placeholder"
        className="static-image"
      />
      <button className="static-button" onClick={(e) => e.preventDefault()}>
        <InfoIcon style={{ fontSize: '24px', marginRight: '8px' }} />
        This button is non-functional
      </button>
    </div>
  );
};

export default StaticPage;
