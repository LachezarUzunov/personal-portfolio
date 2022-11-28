import React from "react";
import Line from "../../layout/Line";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.header__section}>
      <div className={classes.header}>
        <h2>Hello, I am Lachezar Uzunov</h2>
        <h2>Frontend Software Engineer</h2>
        <Line />
        <h3 className={classes.desc}>
          I am motivated and eager to learn new technologies and passionate
          about building exciting projects! I am also a father, a hard rock
          lover and an amateur guitarist
        </h3>
        <div className={classes.btns__div}>
          <button className="btn__primary">Download CV</button>
          <button>View My Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
