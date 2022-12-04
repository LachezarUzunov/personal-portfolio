import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Home from "./components/screens/home/Home";
import CookingApp from "./components/screens/projects/CookingApp";
import Moviezilla from "./components/screens/projects/Moviezilla";
import MementoShop from "./components/screens/projects/MementoShop";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/cooking-app" element={<CookingApp />}/>
        <Route path="/projects/memento-shop" element={<MementoShop />}/>
        <Route path="/projects/moviezilla" element={<Moviezilla />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
