import React, { useState } from 'react';
import '../Styles/Testimonial.css';

const testimonialsData = [
  {
    text: "This perfume has transformed my daily routine. It lasts all day and the scent is just magical.",
    name: "Samantha Peterson",
    company: "Client of Pocket Perfume"
  },
  {
    text: "Absolutely in love with the natural essence of this fragrance. It’s light, fresh, and completely captivating!",
    name: "John Doe",
    company: "Client of Pocket Perfume"
  },
  {
    text: "The perfect balance of elegance and luxury. It makes me feel confident every time I wear it.",
    name: "Emily Brown",
    company: "Client of Pocket Perfume"
  },
  {
    text: "I get compliments everywhere I go thanks to this scent. Highly recommend it!",
    name: "Michael Smith",
    company: "Client of Pocket Perfume"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Handle dot navigation
  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      <div className="testimonial-slide">
        <h2>Testimonials</h2>
        <p>"{testimonialsData[currentIndex].text}"</p>
        <p><strong>{testimonialsData[currentIndex].name}</strong></p>
        <p>{testimonialsData[currentIndex].company}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={prevSlide}>&#8249;</button>
        <button onClick={nextSlide}>&#8250;</button>
      </div>

      {/* Pagination Dots */}
      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;