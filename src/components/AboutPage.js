import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section id="aboutsection" className="section about">
      <div className="Aboutpage">
        <div className="row">
          <div className="col1">
            <h2 className="headings">ABOUT ME</h2>
            <p className="content">
              I'm Sharon P Ajay, a Software Developer who's passionate about
              photography and videography and editing.
            </p>
          </div>
          <div className="col2">
            <img className="myPhoto" src="my-photo.png" alt="my-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
