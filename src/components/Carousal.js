import React, { useState } from "react";
import "../Carousal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import specific icons
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousal = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(items.length / 2)
  );

  // Function to navigate to the next item
  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  // Function to navigate to the previous item
  const prevItem = () => {
    setCurrentIndex((currentIndex + 2) % items.length);
  };

  // Function to navigate to a specific item
  const goToItem = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="outer-container">
      <div className="carousel-container">
        <div className="carousel-item left-card">
          <img
            src={items[(currentIndex - 1 + items.length) % items.length]}
            alt="Description of image"
          />
        </div>

        <div className="carousel-item main-card">
          <img src={items[currentIndex]} alt="Description of image" />
        </div>

        <div className="carousel-item right-card">
          <img
            src={items[(currentIndex + 1) % items.length]}
            alt="Description of image"
          />
        </div>
      </div>

      <div className="buttons">
        <button className="bttn" onClick={nextItem}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {[...Array(items.length)].map((_, index) => (
          <button
            key={index}
            className={`btn ${index === currentIndex ? "active" : ""} `}
            onClick={() => goToItem(index)}
          />
        ))}
        <button className="bttn" onClick={prevItem}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
