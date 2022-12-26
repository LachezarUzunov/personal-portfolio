import React, { useRef, useState } from "react";
import Line from "../../layout/Line";
import classes from "./ContactMe.module.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vwdlf88",
        "template_fd1v9lk",
        form.current,
        "Nx0o_yOvAxqAluK_u"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 7000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={classes.contacts__bg} id="contact">
      <div className="container">
        <div className={classes.contacts__header}>
          <h2>LET'S TALK</h2>
          <Line />
          {sent ? (
            <h5 className={classes.message}>
              Your message was sent successfully. I'll get back to you as soon
              as possible.
            </h5>
          ) : null}
        </div>
        <div className={classes.contacts__form}>
          <form
            ref={form}
            className={classes.contacts__form_inner}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="George"
              required
            ></input>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="george@gmail.com"
              required
            ></input>

            <textarea
              type="text"
              id="inquiry"
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn__primary">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
