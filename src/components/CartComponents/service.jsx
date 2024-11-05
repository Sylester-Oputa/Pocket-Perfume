import React, { useState } from 'react';
import '../Styles/service.css';
import Service from "../images/services.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>At Pocket Perfumes, we believe in bringing the elegance of premium fragrances to everyone.

        Our mission is to offer a curated collection of luxurious, long-lasting perfumes that capture the essence of sophistication. We carefully select our fragrances to suit every occasion and personality, ensuring quality and affordability without compromise.</p>;
      case 'services':
        return <p>Discover the art of scent with our curated offerings. From personalized fragrance consultations to elegant gift packaging and bulk orders, we ensure each bottle is as unique and memorable as you are. Let us guide you in finding the perfect fragrance that speaks to your style and story.</p>;
      case 'history':
        return <p>Founded with a passion for capturing memories in every bottle, our journey began with a simple belief: a fragrance can tell a thousand stories. Over the years, we've grown from a small, local venture to a trusted name, crafting scents that blend tradition, innovation, and elegance.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="content-wrapper">
        {/* Image Section */}
        <div className="image-container">
        <img src={Service} alt="Perfume Bottles" />
        </div>

        {/* Content Section */}
        <div className="text-content">
          <div className="tabs">
            <button
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => setActiveTab('about')}
            >
              About Us
            </button>
            <button
              className={activeTab === 'services' ? 'active' : ''}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              className={activeTab === 'history' ? 'active' : ''}
              onClick={() => setActiveTab('history')}
            >
              History
            </button>
          </div>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;