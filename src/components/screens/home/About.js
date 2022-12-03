import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaAngular,
  FaCpanel,
  FaCss3,
  FaNode,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa";
import { MdDns } from "react-icons/md";
import { SiJavascript, SiMongodb } from "react-icons/si";
import Line from "../../layout/Line";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about__bg}>
      <section className="container">
        <div className={classes.about__heading}>
          <h2>More about me and my experience</h2>
          <Line />
        </div>
        <div className={classes.about__section}>
          <div>
            <img src={require("../../../assets/me.jpg")} alt="profile" />
          </div>
          <div className={classes.about__section_text}>
            <p>
              I've been working in the IT industry for the past 8 years, 7 of
              which as first line technical support representative at SiteGround
              - one of the largest hosting services providers. I've helped over
              60 000 clients with WordPress issues, DNS changes and settings as
              well as email clients configuration.{" "}
            </p>
            <button className="btn__secondary">Let's Talk</button>
          </div>
        </div>
        {/* SKILLS SECTION */}
        <div className={classes.about__skills_heading}>
          <h2 >My Tech Stack</h2>
          <Line />
          <div className={classes.about__skills}>
            <div>
              <i className={classes.icon}>
                <FaCpanel />
              </i>
              <h4>cPanel</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <FaWordpressSimple />
              </i>
              <h4>WordPress</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <MdDns />
              </i>
              <h4>DNS</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <AiFillHtml5 />
              </i>
              <h4>HTML5</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <FaCss3 />
              </i>
              <h4>CSS3</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <SiJavascript />
              </i>
              <h4>JavaScript</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <FaNode />
              </i>
              <h4>NodeJS</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <FaReact />
              </i>
              <h4>ReactJS</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <FaAngular />
              </i>
              <h4>Angular</h4>
            </div>
            <div>
              <i className={classes.icon}>
                <SiMongodb />
              </i>
              <h4>MongoDB</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
