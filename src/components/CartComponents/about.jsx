import React from 'react';
import "../Styles/about.css";
import { Link } from 'react-router-dom';
import Imgrefresher from "../images/1.webp";
import pure from "../images/Pure Essence.png";
import scent from "../images/Scent.png";
import eternal from "../images/Eternal Allure.png";
import timeless from "../images/Timeless elegance.png";

const AboutSection = () => {
  return (
    <section className="your-section">
      <div className="your-content">
        <div className="your-image-container">
            <img src={Imgrefresher} className="your-image-container" alt="" />
         <div className="image-text-overlay">POCKET PERFUME</div>
        </div>

        <div className="your-text-content">
          <h3 className="section-heading">About Pocket Perfume</h3>
          <h1 className="section-title">WE GUARANTEE HIGH QUALITY</h1> 
          <p className="section-description">
          At Pocket Perfumes, we believe in bringing the elegance of premium fragrances to everyone.
          </p>
          <p className="section-description">
          Our mission is to offer a curated collection of luxurious, long-lasting perfumes that capture the essence of sophistication. We carefully select our fragrances to suit every occasion and personality, ensuring quality and affordability without compromise. Whether you're searching for a signature scent or the perfect gift, Pocket Perfumes offers a unique sensory experience designed to leave a lasting impression.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h2 className="stat-value">50k</h2>
              <p className="stat-label">Products sold</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-value">3+</h2>
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>
            <Link to="/about"><button className="explore-button">EXPLORE MORE</button></Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
        <img src={timeless} className="heading_logo" alt="" />
          <p className="feature-text">Timeless Elegance</p>
        </div>
        <div className="feature-item">
        <img src={eternal} className="heading_logo" alt="" />
          <p className="feature-text">Eternal Allure</p>
        </div>
        <div className="feature-item">
        <img src={scent} className="heading_logo" alt="" />
          <p className="feature-text">Scent of Sophistication</p>
        </div>
        <div className="feature-item">
        <img src={pure} className="heading_logo" alt="" />
          <p className="feature-text">Pure Essence</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;