import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2 className="about-h2" id="about-section">
            About AJ's Fitness
          </h2>
        </div>
        <div className="about-box">
          <div className="about-img-box">
            <img
              className="aj-logo"
              src="https://cdn.dribbble.com/users/77971/screenshots/350658/media/5ef7b5722d38d2c34425409956d0a3a0.jpg?compress=1&resize=400x300&vertical=center"
              alt=""
            />
          </div>
          <div className="detail-box">
            <p className="about-p">
              Fitness is the state of physical health and well-being achieved
              through regular exercise, proper nutrition, and a healthy
              lifestyle. It involves activities that improve cardiovascular
              endurance, strength, flexibility, and body composition. Fitness
              benefits include improved heart health, increased energy, reduced
              stress, weight management, and better overall well-being.
              Consulting professionals is recommended before starting any
              fitness program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
