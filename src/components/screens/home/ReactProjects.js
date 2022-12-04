import React from "react";
import { Link } from "react-router-dom";
import Line from "../../layout/Line";
import classes from "./ReactProjects.module.css";

const ReactProjects = () => {
  return (
    <React.Fragment>
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
                with React on the front end and NodeJS and Express on the
                backend. A fullstack application built with React on the front
                end and NodeJS and Express on the backend.A fullstack
                application built with React on the front end and NodeJS and
                Express on the backend.A fullstack application built with React
                on the front end and NodeJS and Express on the backend.A
                fullstack application built with React on the front end and
                NodeJS and Express on the backend.
              </p>
              <div className={classes.projects__buttons}>
                <Link to={"/projects/cooking-app"} className="btn__primary">
                  Learn More
                </Link>
                <a
                  href="https://github.com/LachezarUzunov/react-cooking-app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn__secondary"
                >
                  View on Github
                </a>
              </div>
            </article>
            <article className={classes.projects__image}>
              <img
                src={require("../../../assets/cookmaster.png")}
                alt="cooking"
              />
            </article>
          </section>
        </div>
      </section>
      <section className={classes.projects__bg}>
        <div className="container">
          <section className={classes.projects__section}>
            <article className={classes.projects__image}>
              <img
                src={require("../../../assets/cookmaster.png")}
                alt="guitar"
              />
            </article>
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
                with React on the front end and NodeJS and Express on the
                backend. A fullstack application built with React on the front
                end and NodeJS and Express on the backend.A fullstack
                application built with React on the front end and NodeJS and
                Express on the backend.A fullstack application built with React
                on the front end and NodeJS and Express on the backend.A
                fullstack application built with React on the front end and
                NodeJS and Express on the backend.
              </p>
              <div className={classes.projects__buttons}>
              <Link to={"/projects/memento-shop"} className="btn__primary">
                  Learn More
                </Link>
                <a
                  href="https://github.com/LachezarUzunov/memento-mern-e-commerce-app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn__secondary"
                >
                  View on Github
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>
      <section className={classes.projects__bg}>
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
                with React on the front end and NodeJS and Express on the
                backend. A fullstack application built with React on the front
                end and NodeJS and Express on the backend.A fullstack
                application built with React on the front end and NodeJS and
                Express on the backend.A fullstack application built with React
                on the front end and NodeJS and Express on the backend.A
                fullstack application built with React on the front end and
                NodeJS and Express on the backend.
              </p>
              <div className={classes.projects__buttons}>
              <Link to={"/projects/moviezilla"} className="btn__primary">
                  Learn More
                </Link>
                <a
                  href="https://github.com/LachezarUzunov/moviezilla"
                  target="_blank"
                  rel="noreferrer"
                  className="btn__secondary"
                >
                  View on Github
                </a>
              </div>
            </article>
            <article className={classes.projects__image}>
              <img
                src={require("../../../assets/cookmaster.png")}
                alt="guitar"
              />
            </article>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReactProjects;
