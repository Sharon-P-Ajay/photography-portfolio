import React, { useState, useEffect, useRef } from "react";
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

  const shuffledImages = images
    .map((img) => ({ img, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ img }) => img);

  const reversedImages = [...images].reverse();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(reversedImages[index]);
  };

  const closeImage = () => setSelectedImage(null);

  const showNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % reversedImages.length;
      setSelectedImage(reversedImages[newIndex]);
      return newIndex;
    });
  };

  const showPrev = () => {
    setCurrentIndex((prev) => {
      const newIndex =
        (prev - 1 + reversedImages.length) % reversedImages.length;
      setSelectedImage(reversedImages[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) showNext();
    else if (distance < -threshold) showPrev();
  };
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
        {reversedImages.map((img, index) => (
          <img
            key={index}
            className="gallery1"
            src={img}
            alt={`${folder}${index}`}
            onClick={() => openImage(index)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={closeImage}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            className="lightboxclose ic"
            src={`${process.env.PUBLIC_URL}/close.png`}
            alt="close"
            onClick={closeImage}
          />

          <img
            className="lightboxprev pn"
            src={`${process.env.PUBLIC_URL}/prev.png`}
            alt="prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          />

          <img
            className="lightbox-image"
            src={selectedImage}
            alt="Large view"
            onClick={(e) => e.stopPropagation()}
          />
          <img
            className="lightboxnext pn"
            src={`${process.env.PUBLIC_URL}/next.png`}
            alt="next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
