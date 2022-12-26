import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const MainNavigation = () => {
  const [active, setActive] = useState("home");
  const [openMobile, setOpenMobile] = useState(true);

  return (
    <nav>
      {openMobile ? (
        <button
          onClick={() => setOpenMobile(false)}
          className={`${classes.mobile__btn}`}
        >
          <GiHamburgerMenu />
        </button>
      ) : (
        <button
          onClick={() => setOpenMobile(true)}
          className={`${classes.mobile__btn}`}
        >
          <CgClose />
        </button>
      )}

      <ul
        className={`${classes.nav} ${
          openMobile ? classes.closed : classes.open
        }`}
        id="home"
      >
        <li onClick={() => setActive("about")}>
          <a
            className={`${active === "about" ? classes.active : ""}`}
            href="#about"
          >
            About Me
          </a>
        </li>
        <li onClick={() => setActive("react")}>
          <a
            className={`${active === "react" ? classes.active : ""}`}
            href="#react"
          >
            React Aps
          </a>
        </li>
        <li onClick={() => setActive("WP")}>
          <a
            className={`${active === "WP" ? classes.active : ""}`}
            href="#wordpress"
          >
            WP Sites
          </a>
        </li>
        <li onClick={() => setActive("contact")}>
          <a
            className={`${active === "contact" ? classes.active : ""}`}
            href="#contact"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );

  // <ul className={classes.nav} id="home">
  //   <li
  //     onClick={() => setActive("home")}
  //     className={`${active === "home" ? classes.active : ""}`}
  //   >
  //     <i>
  //       <AiFillHome />
  //     </i>
  //     <Link className={classes.link} to="/">
  //       HOME
  //     </Link>
  //   </li>
  //   {/* <li>
  //     <i>
  //       <BsFillPersonFill />
  //     </i>
  //     <Link to="#about" onClick={() => setActive(true)}>
  //       ABOUT ME
  //     </Link>
  //   </li> */}
  //   <li
  //     onClick={() => setActive("projects")}
  //     className={`${active === "projects" ? classes.active : ""}`}
  //   >
  //     <a className={classes.link} href="#react">
  //       <i>
  //         <FaCode />
  //       </i>
  //       PROJECTS
  //     </a>
  //   </li>
  // </ul>
};

export default MainNavigation;
