import React from "react";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <ul className={classes.nav}>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>PROJECTS</li>
        </ul>

    )
}

export default MainNavigation;