import React from 'react'
import "./../SectionOur.css";
import groupImg from './../../../assets/group.webp'

function Group() {
  return (
    <div style={{display:"flex", columnGap:"80px" }}>
      <div className="content-paragraph">
        <div className="paragraph-top">
          <h5>Why are your Group?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste
          </p>
        </div>
        <div className="paragraph-bottom">
          <h5>When comes Group Your Time.</h5>
          <p>Tuesday-Wednesday: 9:00am - 11:00am</p>
          <p>Saturday-Sunday: 10:00am - 12:00pm</p>
          <p>Thursday-Friday: 5:00pm - 7:00pm</p>
        </div>
      </div>
      <div className="content-img">
        <img src={groupImg} alt="group training" />
      </div>
    </div>
  );
}

export default Group