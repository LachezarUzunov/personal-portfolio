import React from "react";
import Line from "../../layout/Line";
import classes from "./Header.module.css";
import CV_Lachezar_Uzunov from "../../../assets/CV_Lachezar_Uzunov.pdf";

const Header = () => {
  return (
    <section className={classes.header__section}>
      <div className={classes.header__bg}>
        <div className={`${classes.header} ${"container"}`}>
          <div className={classes.header__inner}>
            <h2>Hello, I am Lachezar Uzunov</h2>
            <h2>Frontend Software Engineer</h2>
            <Line />
            <p className={classes.desc}>
              I am motivated and eager to learn new technologies and passionate
              about building exciting projects!
            </p>
            <br />
            <p className={classes.desc}>
              I am also a father, a hard rock lover and an amateur guitarist.
            </p>
            <div className={classes.btns__div}>
              <a download className="btn__primary" href={CV_Lachezar_Uzunov}>
                Download Resume
              </a>
              <a className="btn__secondary" href="#react">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
