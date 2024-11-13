import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import Imgrefresher from "./images/perfume1.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer">
      <div className='footer-logo'>
         <Link to="/"><img src={Imgrefresher} className="foot-logo" alt="" /></Link>
      </div>
      <div className="footer-container">
        <div className="contact-section">
          <h3>Contacts</h3>
          <ul>
            <li className='list'><LocationOnIcon className='icons' /> Orchid Road, Lekki, Lagos State, Nigeria.</li>
            <li className='list'><EmailIcon className='icons' /> danthonynwaokolo@gmail.com</li>
            <li className='list'><PhoneIcon className='icons' /> +234 (909) 606 5436</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>POCKET PERFUMES</h3>
          <p>Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution.”</p>
          <div className="footer-social">
            <Link to="https://api.whatsapp.com/send/?phone=2349096065436&text&type=phone_number&app_absent=0" className='social_link' target='_blank'><WhatsAppIcon /></Link>
            <Link to="https://m.facebook.com/people/Perfs-By-Dumebi/61551904150682/" className='social_link' target='_blank'><FacebookIcon /></Link>
            <Link to="https://www.instagram.com/perfsbydumebi/" className='social_link' target='_blank'><InstagramIcon /></Link>
          </div>
        </div>

        <div className="footer-section">
          <div className='news-letter'>
            <h3>Our newsletter</h3>
            <input type="email" placeholder="Your Email" className="email-input" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="useful-links-section">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="/about" className='social_link'>About us</Link></li>
              <li><Link to="/static" className='social_link'>Privacy</Link></li>
              <li><Link to="/contact" className='social_link'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Designer and Year */}
      <div className="footer-bottom">
        <p>Designed by Sylvester Oputa© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;