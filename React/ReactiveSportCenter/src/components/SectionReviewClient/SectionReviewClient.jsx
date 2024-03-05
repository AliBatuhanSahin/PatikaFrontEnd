import "./SectionReviewClient.css";
import client1Img from "./../../assets/client1.jpg";
import client2Img from "./../../assets/client2.jpg";
import React from 'react';

function ReviewClientSection() {
  return (
    <section id="review" className="review-client-section">
      <div className="review-client-container">
        <article className="review-client-header">
          <div className="client-header-top">
            <h3>REVIEW CLIENT</h3>
            <span> - </span>
          </div>
          <div className="client-header-bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing amet facilis elit.</p>
            <p>Hampden-Sydney Collage.</p>
          </div>
        </article>
        <article className="review-client-footer">
          <div className="client-footer-box">
            <div className="client-footer-box-top">
              <img src={client1Img} alt="" />
              <div className="client-nickname">
                <h6>Diet Expert</h6>
                <span>CFO</span>
              </div>
            </div>
            <div className="client-footer-box-bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, accusamus?
                Blanditiis laboriosam magni repellendus, eius laborum tempore cum rerum nulla
                quibusdam fugiat sint reprehenderit repellat minima ducimus delectus!
              </p>
            </div>
            <div className="client-box-triangle">
              <div className="triangle-left"></div>
              <div className="triangle-right"></div>
            </div>
          </div>
          <div id="blog" className="client-footer-box">
            <div className="client-footer-box-top">
              <img src={client2Img} alt="" />
              <div className="client-nickname">
                <h6>Cardio Trainer</h6>
                <span>CEO</span>
              </div>
            </div>
            <div className="client-footer-box-bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, accusamus?
                Blanditiis laboriosam magni repellendus, eius laborum tempore cum rerum nulla
                quibusdam fugiat sint reprehenderit repellat minima ducimus delectus!
              </p>
            </div>
            <div className="client-box-triangle">
              <div className="triangle-left"></div>
              <div className="triangle-right"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ReviewClientSection;