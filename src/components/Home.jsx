import React from 'react';
import { Link } from 'react-router-dom';
import BestSeller from './BestSeller';
import Footer from './Footer';
import './Home.css';
import Carousel from './CartComponents/Carousel';
import AboutSection from './CartComponents/about';
import Testimonials from './CartComponents/Testimonial';

const Home = () => {
  return (
    <div className='home_container'>
      <header className='header_container'>
        <h1>Perfume</h1>
        <p>
          At <b>Pocket Perfumes</b>, we believe that everyone deserves to experience the luxury of fine fragrances. Our curated collection of premium perfumes is designed to offer a sensory journey that leaves a lasting impression without compromising on quality or affordability.
        </p>
        <Link to="/shop"><button className='perfumebtn'>Shop Perfume</button></Link>
      </header>
      <main className="content">
        <section className="best_seller">
        <h1>Best Sellers Products</h1>
          <BestSeller />
        </section>
        <div className='carousel'>
        <h1>Brands We Sell</h1>
          <Carousel />
        </div>
        <div className="about">
          <AboutSection />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;