import React from "react";
import classes from "./WordPressProjects.module.css";

const WordPressProjects = () => {
  return (
    <section className="container">
      <section className={classes.sites__section}>
        <article>Site 1</article>
        <article>Site 2</article>
        <article>Site 3</article>
      </section>
    </section>
  );
};

export default WordPressProjects;
