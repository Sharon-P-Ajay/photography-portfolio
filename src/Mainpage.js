import React from "react";
import "./Mainpage.css";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import PortfolioPage from "./components/PortfolioPage.js";
import ContactPage from "./components/ContactPage.js";

function Mainpage() {
  return (
    <div className="Mainpage">
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
}

export default Mainpage;
