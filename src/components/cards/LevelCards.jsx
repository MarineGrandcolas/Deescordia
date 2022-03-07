import React from "react";
import { Link } from "react-router-dom";
import "./LevelCards.css";

const LevelCards = ({ card }) => {
  return (
    <div className="LevelCards">
      <div className="lvl-container">
        <Link to={card.level}>
          <h1>{card.level}</h1>
        </Link>
      </div>
    </div>
  );
};

export default LevelCards;
