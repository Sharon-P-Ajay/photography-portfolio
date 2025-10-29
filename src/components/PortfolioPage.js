import React, { useRef } from "react";
import "./PortfolioPage.css";

import { useNavigate } from "react-router-dom";
import PortfolioTile from "./PortfolioTile";

const PortfolioPage = () => {
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const handleClick = () => {
    // Convert title to lowercase and navigate
    window.scrollTo(0, 0);

    navigate(`/portfolio/All Albums`);
  };
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5; // scroll speed
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };
  const handleTouchStart = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.touches[0].pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  return (
    <section id="portfoliosection" className="section portfolio">
      <h2 className="pheading">PORTFOLIO</h2>
      <div className="portfoliopage">
        <div
          className="portfolio-grid"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <PortfolioTile image={"1.jpg"} title="Best" />
          <PortfolioTile image={"2.jpg"} title="Latest" />
          <PortfolioTile image={"3.jpg"} title="Food" />
          <PortfolioTile image={"1.jpg"} title="Best" />
          <PortfolioTile image={"2.jpg"} title="Latest" />
        </div>
        <div className="pb">
          <button className="portfolio-btn" onClick={handleClick}>
            All Albums →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
