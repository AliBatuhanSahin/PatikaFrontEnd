import React from 'react';
import "./SectionContact.css";
// import client1Img from "./../../assets/client1.jpg";
// import client2Img from "./../../assets/client2.jpg";

function SectionContact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <article className="contact-header">
          <div className="contact-header-top">
            <h3>CONTACT US</h3>
            <span> - </span>
          </div>
          <div className="contact-header-bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing amet facilis elit.</p>
            <p>Hampden-Sydney Collage.</p>
          </div>
        </article>
        <article className="contact-footer">
          <div className="cantact-form">
            <div className="communication-container">
              <div className="communication">
                <span>Mobile Number</span>
                <p>+135 773 321 4442</p>
              </div>
              <div className="communication">
                <span>Email Address</span>
                <p>demo@demo.com</p>
              </div>
            </div>
            <span>Make An Appointment</span>
            <div className="form-input-container">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                name="textarea"
                id="textarea"
                cols="10"
                rows="6"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div id="map" className="contact-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12511.322223108822!2d27.193803194128193!3d38.37604111436201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1706370443760!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionContact;