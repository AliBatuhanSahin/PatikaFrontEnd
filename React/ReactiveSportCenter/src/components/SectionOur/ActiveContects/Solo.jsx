import React from 'react'
import "./../SectionOur.css";
import soloImg from "./../../../assets/solo.jpg";

const Solo = () => {
  return (
    <div style={{display:"flex", columnGap:"80px"}} >
      <div className="content-paragraph">
        <div className="paragraph-top">
          <h5>Why are your Solo?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste
          </p>
        </div>
        <div className="paragraph-bottom">
          <h5>When comes Solo Your Time.</h5>
          <p>Monday-Tuesday: 8:00am - 10:00am</p>
          <p>Saturday-Sunday: 10:00am - 12:00pm</p>
          <p>Wednesday-Thursday: 3:00pm - 6:00pm</p>
        </div>
      </div>
      <div className="content-img">
        <img src={soloImg} alt="solo" />
      </div>
    </div>
  );
}

export default Solo
