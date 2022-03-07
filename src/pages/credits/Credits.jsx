import React from "react";
import './Credits.css'

const Credits = () => {
  return (
    <div className="Credits">
      <div className="credits-text">
        <p>Projet réalisé en Février et Mars 2022</p>
        <p>Crédits photos: Pexels et Pixabay</p>
        <p>Générateur de carte fantasy: watabou.itch.io</p>
      </div>
      <div className="credits-links">
        <p>Marine Grandcolas</p>
        <a
          href="https://www.linkedin.com/in/marine-grandcolas/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/MarineGrandcolas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Credits;
