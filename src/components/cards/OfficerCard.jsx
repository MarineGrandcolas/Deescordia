import React from "react";
import "./OfficerCard.css";

const OfficerCard = ({ card }) => {
  return (
    <div className="OfficerCard">
      <div className='officer-portrait' style={{ backgroundImage: `url(${card.image})` }}>
      </div>
      <div className="card-desc">
        <h2>{card.name}</h2>
        <h3>{card.level}</h3>
      </div>
    </div>
  );
};

export default OfficerCard;
