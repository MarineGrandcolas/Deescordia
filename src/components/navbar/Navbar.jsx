import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="Navbar">
      <div className="desktop-navbar" onClick={() => setNavActive(!navActive)}>
        <div className={navActive ? "nav-on" : "nav-off"}>
          <NavLink to="/">
            <h3 className="nav-title">Home</h3>
          </NavLink>
          <NavLink to="/officers">
            <h3 className="nav-title">Officiers</h3>
          </NavLink>
          <NavLink to="/resistance">
            <h3 className="nav-title">Résistants</h3>
          </NavLink>
          <NavLink to="/rank">
            <h3 className="nav-title">Niveaux</h3>
          </NavLink>
          <NavLink to="/deescordia">
            <h3 className="nav-title">Deescordia</h3>
          </NavLink>
          {window.innerWidth < 768 ? (
            <NavLink to="/credits" id="credits-link">
              Crédits
            </NavLink>
          ) : null}
          <div className={navActive ? "menu-desktop-off" : "menu-desktop-on"}>
            <div className="bar arrow-top-fall"></div>
            <div className="bar arrow-middle-fall"></div>
            <div className="bar arrow-bottom-fall"></div>
          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <div className={navActive ? "menu-mobile-off" : "menu-mobile-on"} onClick={() => setNavActive(!navActive)}>
          <div className="bar arrow-top-fall"></div>
          <div className="bar arrow-middle-fall"></div>
          <div className="bar arrow-bottom-fall"></div>
        </div>
        <div className={navActive ? "nav-on" : "nav-off"} onClick={() => setNavActive(!navActive)}>
          <NavLink to="/">
            <h3 className="nav-title">Home</h3>
          </NavLink>
          <NavLink to="/officers">
            <h3 className="nav-title">Officiers</h3>
          </NavLink>
          <NavLink to="/resistance">
            <h3 className="nav-title">Résistants</h3>
          </NavLink>
          <NavLink to="/rank">
            <h3 className="nav-title">Niveaux</h3>
          </NavLink>
          <NavLink to="/deescordia">
            <h3 className="nav-title">Deescordia</h3>
          </NavLink>
          {window.innerWidth < 768 ? (
            <NavLink to="/credits" id="credits-link">
              Crédits
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
