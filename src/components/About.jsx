import React from 'react';
import './About.css';
import Footer from './Footer';
import about1 from "./images/about-image.png";
import mission from "./images/mission.jpg"
import freshIcon from "./images/Fresh type.png";
import floralIcon from "./images/Floral essence.png";
import oceanicIcon from "./images/Ocean.png";
import citrusIcon from "./images/Citrus.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>About Us</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="perfume-section">
      <div className="perfume-content">
        <h2>Natural Organic Cosmetics Promotes Rejuvenation</h2>
        <p>
          Our collection is meticulously crafted from pure, natural essences to bring a touch of elegance
          to every moment. Discover perfumes infused with fresh botanical blooms, earthy notes, and
          vibrant, oceanic undertones—each blend created to leave a lasting impression and embrace
          the beauty of nature.
        </p>
        <div className="perfume-icons">
          <div className="icon-box">
            <img src={freshIcon} alt="Fresh Scents" />
            <h3>Fresh Types</h3>
          </div>
          <div className="icon-box">
            <img src={floralIcon} alt="Floral Scents" />
            <h3>Floral Types</h3>
          </div>
          <div className="icon-box">
            <img src={oceanicIcon} alt="Oceanic Scents" />
            <h3>Oceanic Types</h3>
          </div>
          <div className="icon-box">
            <img src={citrusIcon} alt="Oceanic Scents" />
            <h3>Citrus Fresh</h3>
          </div>
        </div>
      </div>
      <div className="perfume-image">
        <img src={about1} alt="Perfume Bottles" />
      </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="achievement-items">
        <h2>Our Mission</h2>
        <p className="achievement-items">
          Our Mission and Vision is to help everyone smell their best, anytime, anywhere.
           We’re here to make luxurious, pocket-sized perfumes as essential as your wallet
            or phone. Because who says you need a big bottle for big impact? And to become 
            the go-to scent solution for on-the-go individuals who demand both quality and 
            convenience. We envision a world where no pocket or purse goes without the perfect 
            fragrance, so you’re always one spritz away from feeling fabulous.
        </p>
      </div>
      <div className="perfume-image">
        <img src={mission} alt="Perfume Bottles" />
      </div>
      </section>

      <div className="team-page">

      {/* Our Team Section */}
      <section className="team">
        <h2>Meet the CEO</h2>
        <p>
          Meet the dedicated individual behind this brand. From product management to client
          service, I ensure that you get the best perfumes that reflect your unique style.
        </p>
        
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Mika Boosters" />
            <h3>Mika Boosters</h3>
            <p>CEO</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default About;