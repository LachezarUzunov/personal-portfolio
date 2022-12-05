import React from "react";
import Line from "../../layout/Line";
import classes from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <section className={classes.contacts__bg}>
      <div className="container">
        <h2>LET'S TALK</h2>
        <Line />
        <div>
          <form>
            <label htmlFor="name" id="name">
              <h4>Your name</h4>
            </label>
            <input type="text" id="name" placeholder="George"></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
