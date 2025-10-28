import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioTile.css";

const PortfolioTile = ({ image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Convert title to lowercase and navigate
    window.scrollTo(0, 0);

    navigate(`/portfolio/${title.toLowerCase()}`);
  };
  return (
    <div className="portfolio-tile" onClick={handleClick}>
      <img src={image} alt={title} className="tile-image" />
      <p className="tile-title">{title} →</p>
    </div>
  );
};

export default PortfolioTile;
