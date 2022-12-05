import React from "react";
import classes from "./WordPressProjects.module.css";
import Line from "../../layout/Line";

const WordPressProjects = () => {
  return (
    <section className={classes.wordpress__section}>
      <section className="container">
        <div className={classes.wordpress__section_header}>
        <h4>LIVE BUSINESS SITES BUILT FOR FRIENDS</h4>
          <h2>WORDPRESS PROJECTS</h2>
          <Line />
        </div>
        <section className={classes.sites__section}>
          <article className={classes.article__container}>
            <img src={require("../../../assets/teasite.png")} alt="teadesign" />
            <div className={classes.site__info}>
              <h4>GRAPHIC DESIGNER PORTFOLIO</h4>
              <p>
                Some text about this site. Some text about this site. Some text
                about this site. Some text about this site.
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
            <img src={require("../../../assets/teasite.png")} alt="teadesign" />
            <div className={classes.site__info}>
              <h4>ACCOUNTING SERVICES BUSINESS SITE</h4>
              <p>
                
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
            <img src={require("../../../assets/teasite.png")} alt="teadesign" />
            <div className={classes.site__info}>
              <h4>WOODWORKING BUSINESS SITE</h4>
              <p>
                Some text about this site. Some text about this site. Some text
                about this site. Some text about this site.
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
