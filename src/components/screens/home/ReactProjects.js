import React from "react";
import Line from "../../layout/Line";
import classes from "./ReactProjects.module.css";

const ReactProjects = () => {
  return (
    <section className={classes.projects__bg}>
      <div className={classes.projects__header}>
        <h2>My React Apps</h2>
        <Line />
      </div>

      <div className="container">
        <section className={classes.projects__section}>
          <article>
            <h4>Technologies used</h4>
            <div className={classes.projects__tech_stack}>
              <h5>React</h5>
              <h5>NodeJS</h5>
            </div>
          </article>
          <article className={classes.projects__image}>
            <img src={require("../../../assets/guitar.jpg")} alt="guitar" />
          </article>
        </section>
      </div>
    </section>
  );
};

export default ReactProjects;
