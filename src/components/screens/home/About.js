import React from "react";
import Line from "../../layout/Line";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`${"container"}`}>
      <div className={classes.about__heading}>
        <h3>More about me and my experience</h3>
        <Line />
      </div>
      <div className={classes.about__section}>
        <div>
          <img src={require('../../../assets/me.jpg')} alt="profile"/>
        </div>
        <div>
          <h3>Tech Stack</h3>

        </div>
      </div>
    </section>
  );
};

export default About;
