import React, { useState } from "react";
import "./SectionOur.css";
import bmiImg from "./../../assets/bmi-index.jpg";
import Yoga from "./ActiveContects/Yoga.jsx";
import Solo from "./ActiveContects/Solo.jsx";
import Group from "./ActiveContects/Group.jsx";
import Streching from "./ActiveContects/Streching.jsx";

function SectionOur() {
  const [activeTraining, setActiveTraining] = useState("yoga");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleTrainingClick = (training) => {
    setActiveTraining(training);
  };

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    // BMI hesaplama formülü
    const bmi = weightValue / (heightValue / 100) ** 2;

    // BMI değerine göre üçgeni hareket ettir
    const minBMI = 15;
    const maxBMI = 45.5;
    const percentage = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;
    const newPosition = Math.min(Math.max(percentage, 0), 100);

    return newPosition > 80 ? "80%" : `${newPosition}%`;
  };

  const renderContent = () => {
    switch (activeTraining) {
      case "yoga":
        return <Yoga />;
      case "group":
        return <Group />;
      case "solo":
        return <Solo />;
      case "stretching":
        return <Streching/>;
      default:
        return null;
    }
  };

  return (
    <section id="classes" className="section-our">
      <article className="section-our-top trapezoid-backround trapezoid-backround-white">
        <div className="section-our-classes">
          <div className="our-classes">
            <div className="our-classes-header">
              <h3>OUR CLASSES</h3>
              <span> - </span>
            </div>
            <div className="our-classes-footer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing amet facilis
                elit.
              </p>
              <p>Hampden-Sydney Collage.</p>
            </div>
          </div>
        </div>
        <div className="training-styles">
          <span
            id="yoga"
            className={activeTraining === "yoga" ? "active-training" : ""}
            onClick={() => handleTrainingClick("yoga")}
          >
            Yoga
          </span>
          <span
            id="group"
            className={activeTraining === "group" ? "active-training" : ""}
            onClick={() => handleTrainingClick("group")}
          >
            Group
          </span>
          <span
            id="solo"
            className={activeTraining === "solo" ? "active-training" : ""}
            onClick={() => handleTrainingClick("solo")}
          >
            Solo
          </span>
          <span
            id="stretching"
            className={activeTraining === "stretching" ? "active-training" : ""}
            onClick={() => handleTrainingClick("stretching")}
          >
            Streching
          </span>
        </div>
        <div className="section-our-content">{renderContent()}</div>
      </article>
      <article className="section-our-bottom">
        <div className="bmi-container">
          <h3>BMI Calculator</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur rum ut adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur lo hic adipisicing elit. Amet
            ducimus delectus illo hic quos omnis voluptates! Facere ratione
            nisi.
          </p>
          <div className="bmi-calculator">
            <input
              type="number"
              className="input-height"
              placeholder="Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span>cm</span>
            <input
              type="number"
              className="input-weight"
              placeholder="Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span>kg</span>
          </div>
        </div>
        <div className="bmi-img-box">
          <h5>Your BMI</h5>
          <img src={bmiImg} alt="" />
          <div className="bmi-triangle-box">
            <div
              className="bmi-triangle"
              style={{ left: calculateBMI() }}
            ></div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SectionOur;
