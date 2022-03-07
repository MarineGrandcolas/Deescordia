import { Routes, Route, Link } from "react-router-dom";
import CardList from "./pages/factions/Faction";
import Levels from "./pages/levels/Levels";
import LevelFilter from "./components/filter/LevelFilter";
import Deescordia from "./pages/deescordia/Deescordia";
import Credits from "./pages/credits/Credits";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<CardList faction="dictature" />} />
          <Route
            path="/resistance"
            element={<CardList faction="resistance" />}
          />
          <Route path="/rank" element={<Levels />} />
          <Route path="/rank/:level" element={<LevelFilter />} />
          <Route path="/deescordia" element={<Deescordia />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
      {window.innerWidth >= 768 ?
      <Link to="/credits" id="credits-link">
        Crédits
      </Link>
      :
      null
      }
    </div>
  );
}

export default App;
