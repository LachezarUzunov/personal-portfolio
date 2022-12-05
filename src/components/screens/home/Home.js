import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Header from "./Header";
import ReactProjects from "./ReactProjects";
import WordPressProjects from "./WordPressProjects";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <ReactProjects />
      <WordPressProjects />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
