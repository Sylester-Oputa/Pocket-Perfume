import React from 'react';
import './Services.css';
import Footer from './Footer';
import Carousel from './CartComponents/Carousel';
import Service from './CartComponents/service.jsx';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const services = [
  {
    title: 'Custom Blends',
    description: 'Create your own signature fragrance with a custom blend tailored to your preferences.',
    icon: <AutoFixHighIcon />,
  },
  {
    title: 'Gift Packaging',
    description: 'Beautifully designed gift packaging to make every purchase feel extra special.',
    icon: <CardGiftcardIcon />,
  },
  {
    title: 'Fragrance Consultation',
    description: 'Personal consultation with our experts to help you find your perfect scent.',
    icon: <QuestionAnswerIcon />,
  },
  {
    title: 'Bulk Orders',
    description: 'Special pricing for bulk orders, ideal for weddings, events, and corporate gifts.',
    icon: <LocalShippingIcon />,
  },
];

const Services = () => {
  return (
    <div className="contact-container">
    <section className="contact">
        <div className="contact-text">
          <h1>Our Services</h1>
        </div>
      </section>
      <div>
        <Service />
      </div>
      <p className="services-intro">Discover our exclusive offerings crafted to elevate your fragrance experience.</p>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className='carousel'>
          <Carousel />
        </div>
      <Footer />
    </div>
  );
};

export default Services;

