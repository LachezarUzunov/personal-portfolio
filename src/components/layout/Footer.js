import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer__bg}>
      <div className="container">
        <h2 className={classes.footer__heading}>UZUNOV DESIGN</h2>
        <ul className={classes.permalinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#react">React apps</a>
          </li>
          <li>
            <a href="#wordpress">Wordpress apps</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div>
          <ul className={classes.socials}>
            <li>
              <a
                href="https://github.com/LachezarUzunov"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaGithub />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lachezar-uzunov/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaLinkedin />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/lycho.uzunov"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__copyright}>
          <h4>&copy; Uzunov Design. All Rights Reserved</h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
