import React, { useState, useEffect } from 'react';
import LevelCards from '../../components/cards/LevelCards'
import axios from 'axios';

const Levels = () => {
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
      axios
      .get('https://api.jsonbin.io/b/621915e425fb1b26b188eb82/9')
      .then((res) => res.data)
      .then((data) => setCards(data))
  }, []);

  return (
  <div className='Levels'>
    <div className="animate__animated animate__fadeInUp">
      <div className="levels-container">
        {cards &&
        cards
        .filter((card, id, self) =>
        id === self.findIndex((t) => (
        t.level === card.level
        ))
        )
        .map((card) =>
      <div key={card.id}>
        <LevelCards card={card} />
      </div>
      )}
      </div>
  </div>
  </div>
    );
};

export default Levels;
