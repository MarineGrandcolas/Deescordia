import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OfficerCard from "../cards/OfficerCard";
import './CardFilter.css'

const LevelFilter = () => {
  const [cards, setCards] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/b/621915e425fb1b26b188eb82/9')
      .then((res) => setCards(res.data));
  }, [params.level]);

const sortedCards = cards.sort((a, b) => a.name > b.name)

 return (
    <div className="LevelFilter">
      <h2>Officiers de niveau {params.level}</h2>

      <div className="filter-container">
        {sortedCards &&
          sortedCards
          .filter((filteringLevel) => filteringLevel.level === params.level)
          .map((card, index) => (
            <div className={`card-set ${card.faction}`} key={index}>
                <OfficerCard card={card}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LevelFilter;
