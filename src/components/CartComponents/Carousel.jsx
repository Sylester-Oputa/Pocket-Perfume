import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Carousel.css';
import logo1 from "../images/burberry.png";
import logo2 from "../images/Creed.png";
import logo3 from "../images/D&G.png";
import logo4 from "../images/Dior.png";
import logo5 from "../images/estee.png";
import logo6 from "../images/guess.png";
import logo7 from "../images/hermes.png";
import logo8 from "../images/images (1).png";
import logo9 from "../images/tom ford.png";
import logo10 from "../images/valentino.png";
import logo11 from "../images/Vecteezy.png";
import logo12 from "../images/Versace.jpg";
import logo13 from "../images/victoria secrets.png";
import logo14 from "../images/ysl logo.jpg";




const Carousel = () => {
   const logos = [
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo11,
      logo12,
      logo13,
      logo14
   ];

  const settings = {
    dots: true, // Add navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos visible at once
    slidesToScroll: 1, // How many logos scroll at a time
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className='carousel-item'>
            <img src={logo} alt={`Logo ${index + 1}`} className='logo-img' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;