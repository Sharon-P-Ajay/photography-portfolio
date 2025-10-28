import React, { useState } from "react";
import "../App.css";
import "./HomePage.css";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <section className="home-section">
      <div id="homePage">
        <nav>
          <img className="logo" src="icon.png" alt="logo" />
          <ul id="sidemenu" className={isMenuOpen ? "open" : ""}>
            <li>
              <a href="#aboutsection" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#portfoliosection" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contactsection" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
            <img
              className="closeicon ic"
              src="close.png"
              alt="close"
              onClick={closeMenu}
            />
          </ul>
          <img
            className="menuicon ic"
            src="menu.png"
            alt="menu"
            onClick={openMenu}
          />
        </nav>

        <div className="homeText">
          <h1>SHARON</h1>
          <p>Photography</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
