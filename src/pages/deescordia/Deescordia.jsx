import axios from "axios";
import React, { useState, useEffect } from "react";
import OfficerCard from "../../components/cards/OfficerCard";
import WorldMap from "../../assets/deescordia.png";
import "./Deescordia.css";

const Deescordia = () => {
  const [cards, setCards] = useState([]);
  const [district, setDistrict] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordChecked, setPasswordChecked] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/621915e425fb1b26b188eb82/9")
      .then((res) => setCards(res.data));
  }, []);

  const filteringCards = passwordChecked
    ? cards &&
      cards.filter(
        (filteringDistrict) => filteringDistrict.district === district
      )
    : cards &&
      cards.filter(
        (filteringDistrict) =>
          filteringDistrict.district === district &&
          filteringDistrict.faction === "dictature"
      );

  const password = ["tete", "tête", "la tete", "la tête"];

  const checkingPassword = () => {
    password.includes(passwordInput)
      ? setPasswordChecked(true)
      : setPasswordChecked(false);
  };

  return (
    <div className="Deescordia">
      <div className="legend">
        <h3>Deescordia</h3>
        <ul className="legend-list">
          <li>Pocket Tryp</li>
          <li>Archange</li>
          <li>Luys Carryn</li>
          <li>Cooba</li>
          <li>Fireden</li>
          <li>Pen D'hoora</li>
          <li>Hash Pit</li>
          <li>Paw Dias</li>
          <li>Saint State Gram</li>
        </ul>
      </div>

      <div className="map-container animate__animated animate__fadeInUp">
        <img src={WorldMap} alt="worldmap" />
        <div className="map-dots">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            version="1.1"
            viewBox="0 0 3439 3119"
          >
            <ellipse
              cx="1322.2"
              cy="193.62"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Saint State Gram")}
            />
            <path
              d="m1318.6 231.96c-2.804-0-5.222-0.123-7.254-0.369s-3.785-0.509-5.256-0.79l-13.877-7.795 7.254-14.642 20.079 5.688c4.766 0 8.235-1.316 10.407-3.95 2.173-2.633 3.259-5.951 3.259-9.954l-16.189 3.16c-4.976 0-9.479-0.772-13.509-2.317s-7.236-4.073-9.619-7.584c-2.383-3.512-3.574-8.217-3.574-14.115-0-7.374 2.698-13.22 8.094-17.539 5.397-4.319 13.071-6.478 23.023-6.478 6.588-0 12.335 1.264 17.241 3.792s8.708 6.584 11.406 12.166c2.698 5.583 4.048 13.044 4.048 22.384-0 8.919-1.577 16.204-4.731 21.858-3.154 5.653-7.412 9.813-12.773 12.482-5.362 2.668-11.371 4.003-18.029 4.003zm1.577-44.031c3.153 0 5.834-0.123 8.042-0.369 2.207-0.245 3.872-0.474 4.993-0.684 0-4.073-1.103-7.339-3.311-9.797-2.208-2.457-5.379-3.686-9.514-3.686-3.644-0-6.255 0.772-7.832 2.317s-2.365 3.301-2.365 5.267c-0 2.739 0.806 4.582 2.418 5.53 1.611 0.948 4.135 1.422 7.569 1.422z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="844.28"
              cy="754.99"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Paw Dias")}
            />
            <path
              d="m844.49 793.33c-3.855-0-7.639-0.369-11.354-1.106-3.714-0.738-7.096-1.967-10.144-3.687-3.049-1.721-5.484-4.056-7.307-7.005-1.822-2.949-2.733-6.636-2.733-11.06 0-4.495 0.946-8.111 2.838-10.85 1.893-2.739 4.381-4.845 7.464-6.32-2.523-1.826-4.345-4.091-5.466-6.794-1.121-2.704-1.682-5.741-1.682-9.112-0-4.073 1.104-7.654 3.311-10.744 2.208-3.09 5.414-5.53 9.619-7.321s9.287-2.686 15.244-2.686c8.971 0 15.909 1.791 20.815 5.372 4.906 3.582 7.359 8.708 7.359 15.379-0 3.722-0.526 6.865-1.577 9.428-1.052 2.563-2.593 4.652-4.626 6.267 2.944 1.475 5.239 3.599 6.886 6.373s2.47 6.443 2.47 11.008c0 4.424-0.876 8.111-2.628 11.06s-4.117 5.284-7.096 7.005c-2.978 1.72-6.325 2.949-10.039 3.687-3.715 0.737-7.499 1.106-11.354 1.106zm-0-45.927c2.593 0 4.59-0.685 5.992-2.054s2.103-2.932 2.103-4.687c-0-1.826-0.701-3.301-2.103-4.424-1.402-1.124-3.399-1.686-5.992-1.686-2.523 0-4.573 0.509-6.15 1.528-1.577 1.018-2.365 2.545-2.365 4.582-0 1.966 0.788 3.581 2.365 4.845s3.627 1.896 6.15 1.896zm-0 28.02c3.785-0 6.605-0.615 8.463-1.844 1.857-1.229 2.786-2.686 2.786-4.371-0-2.107-0.859-3.845-2.576-5.214-1.717-1.37-4.03-2.353-6.938-2.95-2.909-0.597-6.15-0.825-9.725-0.684-0.841 0.912-1.559 2.036-2.155 3.37-0.595 1.335-0.893 2.739-0.893 4.214-0 2.177 0.893 3.967 2.68 5.372 1.788 1.404 4.573 2.107 8.358 2.107z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="520.62"
              cy="1734.9"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Hash Pit")}
            />
            <path
              d="m503.59 1772.2 17.556-46.769 5.572-11.06h-3.154l-30.487 2.107v-18.856h55.087v12.746l-17.346 44.979-5.257 16.853h-21.971z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="1228"
              cy="2022.2"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Pocket Tryp")}
            />
            <path
              d="m1222.6 2059.5v-53.616h-12.615v-16.749l31.958-4.213 1.052 6.32-1.052 10.534v57.724h-19.343z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="1685.8"
              cy="1577.1"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Archange")}
            />
            <path
              d="m1658 1614.4v-14.642s0.666-0.421 1.998-1.264c1.331-0.843 3.048-2.001 5.151-3.476 2.102-1.475 4.38-3.125 6.833-4.951s4.766-3.722 6.938-5.688c3.154-2.739 5.782-5.179 7.885-7.321 2.102-2.142 3.679-4.266 4.731-6.373 1.051-2.107 1.576-4.529 1.576-7.268 0-4.494-2.978-6.742-8.935-6.742-2.944 0-5.905 0.369-8.883 1.106-2.979 0.738-5.712 1.598-8.2 2.581s-4.433 1.826-5.835 2.528v-17.907c2.033-1.123 5.292-2.387 9.777-3.792 4.485-1.404 9.952-2.107 16.4-2.107 9.111 0 15.769 1.914 19.974 5.741s6.307 9.603 6.307 17.328c0 4.003-0.736 7.584-2.207 10.744-1.472 3.16-3.364 5.987-5.677 8.48s-4.783 4.652-7.412 6.478c-2.628 1.826-5.133 3.353-7.516 4.582s-4.345 2.23-5.887 3.002l0.525 2.107 28.174-2.107v18.961h-55.717z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="1342.2"
              cy="1069.8"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Luys Carryn")}
            />
            <path
              d="m1338.5 1108.1c-2.242-0-4.362-0.071-6.36-0.211-1.997-0.141-3.872-0.351-5.624-0.632l-13.246-6.004 5.256-16.749 21.026 5.794c4.064-0 7.008-0.685 8.83-2.054 1.822-1.37 2.734-3.108 2.734-5.214-0-1.897-0.666-3.231-1.998-4.003-1.331-0.773-3.574-1.159-6.728-1.159h-13.036v-16.959h11.775c2.382-0 4.292-0.492 5.729-1.475s2.155-2.352 2.155-4.108c-0-2.247-0.666-3.81-1.997-4.687-1.332-0.878-3.224-1.317-5.677-1.317-3.504-0-6.869 0.351-10.092 1.053-3.224 0.703-6.098 1.528-8.621 2.476s-4.59 1.773-6.202 2.475v-17.907c1.401-0.702 3.399-1.51 5.992-2.423s5.694-1.72 9.304-2.423c3.609-0.702 7.551-1.053 11.826-1.053 7.92 0 13.93 1.738 18.03 5.214s6.15 8.374 6.15 14.695c-0 3.651-0.754 6.653-2.261 9.006-1.507 2.352-3.136 4.231-4.888 5.635 2.943 1.335 5.414 3.318 7.411 5.952 1.998 2.633 2.996 6.267 2.996 10.902 0 16.784-10.828 25.176-32.484 25.176z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="1917.7"
              cy="760.61"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Cooba")}
            />
            <path
              d="m1920.2 797.9v-10.534h-38.056v-13.904l30.066-50.14h27.333l2.103 6.425-2.103 10.534v30.02h13.666v16.012l-13.666 1.053v10.534h-19.343zm-15.559-27.599h15.559v-26.123h-1.893l-13.666 26.123z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="2661.7"
              cy="852.81"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Fireden")}
            />
            <path
              d="m2660.6 891.15c-2.663-0-5.134-0.07-7.411-0.211-2.278-0.14-4.398-0.351-6.36-0.632l-15.349-4.845 5.256-18.855 21.762 6.847c3.714-0 6.605-0.615 8.673-1.844 2.067-1.229 3.101-3.388 3.101-6.478-0-2.317-0.789-4.108-2.366-5.372-1.576-1.264-4.327-1.896-8.252-1.896h-23.969v-42.345h50.986v17.801l-26.281-1.053h-4.415v10.112h7.043c9.742 0 16.82 2.037 21.236 6.11 4.415 4.073 6.623 9.761 6.623 17.064-0 5.408-1.244 10.025-3.732 13.852s-5.993 6.742-10.513 8.743c-4.521 2.001-9.864 3.002-16.032 3.002z"
              fill="#ce8531"
              fillRule="nonzero"
            />
            <ellipse
              cx="1794.8"
              cy="2678.7"
              rx="75.742"
              ry="75.893"
              fill="#fff"
              onClick={() => setDistrict("Pen D'hoora")}
            />
            <path
              d="m1796.7 2717.1c-6.798-0-12.738-1.264-17.819-3.792s-9.023-6.461-11.827-11.798c-2.803-5.337-4.205-12.184-4.205-20.54 0-7.795 0.999-14.309 2.996-19.54 1.998-5.232 4.696-9.375 8.095-12.43s7.219-5.249 11.459-6.583c4.24-1.335 8.603-2.002 13.088-2.002 3.574 0 7.061 0.281 10.46 0.843s5.87 1.194 7.412 1.896l9.566 8.532-9.461 15.274-16.926-8.743c-4.625 0-8.497 1.317-11.616 3.95-3.119 2.634-4.678 6.373-4.678 11.218l15.559-3.16c4.975 0 9.584 0.685 13.824 2.054 4.24 1.37 7.639 3.722 10.197 7.058s3.837 7.953 3.837 13.852c0 7.233-2.505 13.026-7.517 17.38-5.011 4.354-12.492 6.531-22.444 6.531zm-0.105-18.118c3.224 0 5.729-0.579 7.516-1.738 1.788-1.159 2.681-2.721 2.681-4.687 0-2.037-0.806-3.898-2.418-5.583-1.612-1.686-4.135-2.528-7.569-2.528-3.014-0-5.572 0.649-7.674 1.948-2.103 1.3-3.539 2.406-4.31 3.319 0.56 2.598 1.804 4.792 3.732 6.583 1.927 1.791 4.608 2.686 8.042 2.686z"
              fill="#ce8531"
              fillRule="nonzero"
            />
          </svg>
        </div>
        {district.length ? (
          <div className="pop-up">
            <button onClick={() => setDistrict("")}>
              <h3>X</h3>
            </button>
            <div className="cards-district">
              {filteringCards.length ? (
                filteringCards.map((card, index) => (
                  <div className={`card-set ${card.faction}`} key={index}>
                    <OfficerCard card={card} />
                  </div>
                ))
              ) : (
                <h3>Personne dans ce district</h3>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="enigma">
        <p>
          Trois résistants vont au maquis. Le premier prend une pelle, le second
          une pioche. Que prend le troisième ?
        </p>
        <div className="input-display">
          <input
            type="text"
            placeholder="Réponse"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordInput}
          />
          {passwordInput.length ? (
            <p onClick={() => setPasswordInput("")}>X</p>
          ) : null}
          <button
            onClick={() => {
              checkingPassword();
              setPasswordInput("");
            }}
          >
            Entrer
          </button>
        </div>
      </div>

      <div className={passwordChecked ? "auth-on" : "auth-off"}>
        <div className="animate__animated animate__flipInX">
          <h2 className="glitch-title">Résistants activés</h2>
          <h2 className="glitch-title">Résistants activés</h2>
          <h2 className="glitch-title">Résistants activés</h2>
        </div>
      </div>
    </div>
  );
};

export default Deescordia;
