import React from 'react';
import './Footer.css'
import logoImg from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <article className="footer-logo">
          <img src={logoImg} alt="" />
        </article>
        <article className="footer-contact">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt inventore ducimus
            iste tempora saepe, temporibus quasi natus quisquam optio cumque sit laboriosam est
            eius dolor exercitationem unde sed atque alias veritatis non nisi nobis!
          </p>
        </article>
        <article className="footer-info-box">
          <div className="info">
            <span>Information</span>

            <a href="#about-us">About Us</a>
            <a href="#classes">Classes</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="helpful">
            <span>Helpful Links</span>

            <a href="#">Services</a>
            <a href="#">Supports</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </article>
      </div>
    </footer>
  );
}

export default Footer;