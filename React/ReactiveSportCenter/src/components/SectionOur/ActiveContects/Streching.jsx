import React from 'react'
import "./../SectionOur.css";
import strechingImg from './../../../assets/stret.webp'

const Streching = () => {
  return (
    <div style={{display:"flex", columnGap:"80px" }}>
      <div className="content-paragraph">
        <div className="paragraph-top">
          <h5>Why are your Stretching?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste
          </p>
        </div>
        <div className="paragraph-bottom">
          <h5>When comes Stretch Your Time.</h5>
          <p>Sunday-Monday: 9:00am - 11:00am</p>
          <p>Saturday-Sunday: 10:00am - 12:00pm</p>
          <p>Tuesday-Wednesday: 7:00pm - 9:00pm</p>
        </div>
      </div>
      <div className="content-img">
        <img src={strechingImg} alt="group training" />
      </div>
    </div>
  );
}

export default Streching