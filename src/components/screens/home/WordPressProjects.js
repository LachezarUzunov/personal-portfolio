import React from "react";
import classes from "./WordPressProjects.module.css";
import Line from "../../layout/Line";

const WordPressProjects = () => {
  return (
    <section className={classes.wordpress__section} id="wordpress">
      <section className="container">
        <div className={classes.wordpress__section_header}>
          <h4>LIVE BUSINESS SITES BUILT FOR CLIENTS</h4>
          <h2>WORDPRESS PROJECTS</h2>
          <Line />
        </div>
        <section className={classes.sites__section}>
          <article className={classes.article__container}>
            <img src={require("../../../assets/teasite.png")} alt="teadesign" />
            <div className={classes.site__info}>
              <h4>GRAPHIC DESIGNER PORTFOLIO</h4>
              <p>
                A fascinating and enjoyable project in which I worked with and helped a professional product photographer and grafic designer go online and show his work.
              </p>
              <a
                className="btn__secondary"
                target="_blank"
                rel="noreferrer"
                href="https://teadesign.net"
              >
                View it
              </a>
            </div>
          </article>
          <article className={classes.article__container}>
            <img src={require("../../../assets/rave.png")} alt="accounting" />
            <div className={classes.site__info}>
              <h4>ACCOUNTING SERVICES BUSINESS SITE</h4>
              <p>
                A friend has an accounting office that is quite popular in our
                town actually and I urged him to go online and find even more
                clients!
              </p>
              <a
                className="btn__secondary"
                target="_blank"
                rel="noreferrer"
                href="https://kantorarave.com"
              >
                View it
              </a>
            </div>
          </article>
          <article className={classes.article__container}>
            <img src={require("../../../assets/wood.png")} alt="woodworking" />
            <div className={classes.site__info}>
              <h4>WOODWORKING BUSINESS SITE</h4>
              <p>
                A fellow and his father run logging and woodworking business for
                years and finally went online. It turned out they have no
                competitors with online presence and receive several inquires
                daily through their contact form.
              </p>
              <a
                className="btn__secondary"
                target="_blank"
                rel="noreferrer"
                href="https://ilton.bg"
              >
                View it
              </a>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default WordPressProjects;
