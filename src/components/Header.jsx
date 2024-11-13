import React from 'react';
import './Header.css';

const NewsTicker = () => {
  const newsItems = [
    "Welcome to Pocket Perfumes!",
    "Discover Exquisite Scents.",
    "Indulge in Affordable Luxury.",
    "Find Your Signature Fragrance.",
    "Free Shipping on Orders Above ₦10,000!",
  ];

  return (
    <div role="banner" className="ticker-wrap">
      <div className="ticker">
        {newsItems.map((item, index) => (
          <div className="ticker-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;