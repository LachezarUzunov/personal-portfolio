import React from "react";
import About from "./About";
import Header from "./Header";
import ReactProjects from "./ReactProjects";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <ReactProjects />
    </React.Fragment>
  );
};

export default Home;
