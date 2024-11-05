// ContactUs.js
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID'        // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send the message, please try again.");
    });
  };

  return (
    <div className="contact-container">
    <section className="contact">
        <div className="contact-text">
          <h1>Contact Us</h1>
        </div>
      </section>
      <div className="map-section">
      <iframe 
      title="Google Map of Orchid Rd, Lagos Nigeria"
      loading="lazy" 
      allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Orchid%20Road%2C%20Lekki%2C%20Lagos%20State%2C%20Nigeria.&zoom=15&maptype=satellite">
      </iframe>
      </div>
      <div className="form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;