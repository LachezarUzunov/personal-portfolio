import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const [active, setActive] = useState("home");

  return (
    <ul className={classes.nav}>
      <li
        onClick={() => setActive("home")}
        className={`${active === "home" ? classes.active : ""}`}
      >
        <i>
          <AiFillHome />
        </i>
        <Link className={classes.link} to="/">
          HOME
        </Link>
      </li>
      {/* <li>
        <i>
          <BsFillPersonFill />
        </i>
        <Link to="#about" onClick={() => setActive(true)}>
          ABOUT ME
        </Link>
      </li> */}
      <li
        onClick={() => setActive("projects")}
        className={`${active === "projects" ? classes.active : ""}`}
      >
        <i>
          <FaCode />
        </i>
        <Link className={classes.link} to="/projects">
          PROJECTS
        </Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
