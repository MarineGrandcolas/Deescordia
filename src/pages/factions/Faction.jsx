import React, { useEffect, useState } from "react";
import axios from "axios";
import OfficerCard from "../../components/cards/OfficerCard";
import "../../components/filter/CardFilter.css";

const Faction = ({ faction }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/621915e425fb1b26b188eb82/9")
      .then((res) => setCards(res.data));
  }, [faction]);

  const sortedCards = cards.sort((a, b) => a.name > b.name);

  return (
    <div className="Faction">
      <div className="animate__animated animate__fadeInUp">
        <h2>Officiers de la {faction}</h2>

        <div className="filter-container">
          {sortedCards &&
            sortedCards
              .filter((filteringFaction) => filteringFaction.faction === faction)
              .map((card, index) => (
                <div className={`card-set ${card.faction}`} key={index}>
                    <OfficerCard card={card} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Faction;
