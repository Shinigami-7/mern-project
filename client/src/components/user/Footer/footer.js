import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Evotik</h2>
        <p>Welcome to Evotik, your one-stop shop for all things anime! From figures to posters, we bring your favorite anime characters and worlds to life. Our mission is to provide high-quality products and excellent customer service to anime fans worldwide.</p>

        <div className="social-media">
          <a href="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-middle">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <p>Kapan, Faika</p>
        <p>Email: evotik@gmail.com</p>
        <p>Phone: +977 9843223331</p>
      </div>
    </footer>
  );
};

export default Footer;