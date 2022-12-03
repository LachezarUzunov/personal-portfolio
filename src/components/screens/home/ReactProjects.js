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
              {/* <h3>On the frontend</h3> */}
              <h5>React</h5>
              <h5>CSS3</h5>
              <h5>Font Awesome</h5>
              <h5>React Router</h5>
              <h5>React Toastify</h5>
              <h5>Redux</h5>
              {/* <h3>On the backend</h3> */}
              <h5>NodeJS</h5>
              <h5>MongoDB</h5>
              <h5>Express</h5>
              <h5>Multer</h5>
              <h5>Mongoose</h5>
            </div>
            <h4>Overview</h4>
            <h2>THE COOK MASTER</h2>
            <p>
              A fullstack application built with React on the front end and
              NodeJS and Express on the backend. A fullstack application built
              with React on the front end and NodeJS and Express on the backend.
              A fullstack application built with React on the front end and
              NodeJS and Express on the backend.A fullstack application built
              with React on the front end and NodeJS and Express on the
              backend.A fullstack application built with React on the front end
              and NodeJS and Express on the backend.A fullstack application
              built with React on the front end and NodeJS and Express on the
              backend.
            </p>
            <div>
              <button className="btn__primary">Learn More</button>
              <button className="btn__secondary">View on Github</button>
            </div>
          </article>
          <article className={classes.projects__image}>
            <img src={require("../../../assets/cookmaster.png")} alt="guitar" />
          </article>
        </section>
      </div>
    </section>
  );
};

export default ReactProjects;
