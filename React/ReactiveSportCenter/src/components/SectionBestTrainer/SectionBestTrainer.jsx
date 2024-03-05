import React from 'react';
import './SectionBestTrainer.css'
import Trainer1Img from './../../assets/trainer1.jpg'
import Trainer2Img from './../../assets/trainer2.jpg'
import Trainer3Img from './../../assets/trainer3.jpg'

function SectionBestTrainer() {
  return (
    <section id="trainer" className="best-trainer-section">
      <div className="best-trainer-container">
        <article className="best-trainer-header">
          <div className="trainer-header-top">
            <h3>OUR BEST TRAINERS</h3>
            <span> - </span>
          </div>
          <div className="trainer-header-bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing amet facilis elit.</p>
            <p>Hampden-Sydney Collage.</p>
          </div>
        </article>
        <article className="best-trainer-footer">
          <div id="card1" className="best-trainer-card">
            <div className="rectangle-active-box">
              <div className="rectangle-active1">
                <div className="trainer-active">
                  <span>Kübra ASLAN</span>
                  <p>Yoga Trainer</p>
                </div>
              </div>
              <div className="rectangle-active2"></div>
            </div>
            <div className="border-horizontal"></div>
            <div className="border-vertical"></div>
            <div className="card-img-hover">
              <img src={Trainer1Img} alt="" />
              <div className="border-active-box">
                <div className="border-vertical-active"></div>
                <div className="border-horizontal-active"></div>
              </div>
            </div>
          </div>
          <div id="card2" className="best-trainer-card">
            <div className="rectangle-active-box">
              <div className="rectangle-active1">
                <div className="trainer-active">
                  <span>Ersin MUTLU</span>
                  <p>Fitness Trainer</p>
                </div>
              </div>
              <div className="rectangle-active2"></div>
            </div>
            <div className="border-horizontal"></div>
            <div className="border-vertical"></div>
            <div className="card-img-hover">
              <img src={Trainer2Img} alt="" />
              <div className="border-active-box">
                <div className="border-vertical-active"></div>
                <div className="border-horizontal-active"></div>
              </div>
            </div>
          </div>
          <div id="card3" className="best-trainer-card">
            <div className="rectangle-active-box">
              <div className="rectangle-active1">
                <div className="trainer-active">
                  <span>Jane Doe</span>
                  <p>Cardio Trainer</p>
                </div>
              </div>
              <div className="rectangle-active2"></div>
            </div>
            <div className="border-horizontal"></div>
            <div className="border-vertical"></div>
            <div className="card-img-hover">
              <img src={Trainer3Img} alt="" />
              <div className="border-active-box">
                <div className="border-vertical-active"></div>
                <div className="border-horizontal-active"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionBestTrainer;