import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const { collectionName } = useParams();
  const navigate = useNavigate();

  return (
    <section id="gallerysection" className="section-gallery">
      <div className="gheadingdiv">
        <div>
          <h2 className="gheading">{collectionName.toLowerCase()}</h2>
        </div>
        <div>
          <img
            className="galleryclose ic"
            src={`${process.env.PUBLIC_URL}/close.png`}
            alt="close"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <div className="gallery">
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/2.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/4.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/3.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/3.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/4.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/5.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/4.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/2.jpg`}
          alt="1"
        />
        <img
          className="gallery1"
          src={`${process.env.PUBLIC_URL}/5.jpg`}
          alt="1"
        />
      </div>
    </section>
  );
};

export default Gallery;
