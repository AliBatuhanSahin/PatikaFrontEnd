import React from "react";
import "./../SectionOur.css";
import yogaImg from "./../../../assets/yoga.jpg";

function Yoga() {
  return (
    <div style={{display:"flex", columnGap:"80px" }}>
      <div className="content-paragraph">
        <div className="paragraph-top">
          <h5>Why are your Yoga?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita
            praesentium asfagfd numquam quidem possimus iste recusandae ipsaa.
            asfagfd numquam quidem possimus iste
          </p>
        </div>
        <div className="paragraph-bottom">
          <h5>When comes Yoga Your Time.</h5>
          <p>Saturday-Sunday: 8:00am - 10:00am</p>
          <p>Monday-Tuesday: 10:00am - 12:00pm</p>
          <p>Saturday-Sunday: 3:00pm - 6:00pm</p>
        </div>
      </div>
      <div className="content-img">
        <img src={yogaImg} alt="yoga" />
      </div>
    </div>
  );
}

export default Yoga;
