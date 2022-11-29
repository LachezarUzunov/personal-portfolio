import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Home from "./components/screens/home/Home";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
