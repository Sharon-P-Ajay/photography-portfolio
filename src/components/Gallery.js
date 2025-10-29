import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const { collectionName } = useParams();
  const navigate = useNavigate();

  let imageCount, folder;
  if (collectionName.toLowerCase() === "best") {
    imageCount = 5;
    folder = "best";
  } else if (collectionName.toLowerCase() === "latest") {
    imageCount = 4;
    folder = "latest";
  } else if (collectionName.toLowerCase() === "all albums") {
    imageCount = 5;
    folder = "all albums";
  } else {
    imageCount = 5;
    folder = "all albums";
  }

  const images = Array.from(
    { length: imageCount },
    (_, i) => `${process.env.PUBLIC_URL}/albums/${folder}/${i + 1}.jpg`
  );

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
        {images.map((img, index) => (
          <img
            key={index}
            className="gallery1"
            src={img}
            alt={`${folder}${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
