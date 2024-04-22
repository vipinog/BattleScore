import React from 'react';
import "./Result.css";
import {Link , NavLink} from 'react-router-dom'
import grind from "./images/grind2024.jpeg";
import BGIS from "./images/bgis2024.jpg";
import Only from "./images/onlygame.jpg";
import bgis2021 from "./images/bgis2021.jpg";
import bgis2024 from "./images/bgis2024.jpg";
import BMOC2022 from "./images/BMOC2022.png";
import BMPS2022 from "./images/BMPS2022.jpg";
import BMPS2023 from "./images/BMPS2023.jpg";
import bgis2023 from "./images/bgis2023.jpg";
import grind2023 from "./images/grind2023.jpg";
import BMSD2022 from "./images/BMSD2022.jpg";
import grind2021 from "./images/GRIND2021.jpg";
import HOLI2024 from "./images/HOLII2021.jpg";
import INKR from "./images/IN-KR2023.jpg";
import Launch from "./images/launch2021.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faArrowTrendUp,
  faBomb ,
  faRss,
  faNewspaper,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";



function Result() {
  return (
    <div>
      <div className="ongoing">
        <div className="ongoing-icon">
          <FontAwesomeIcon icon={faBoltLightning} />
          <span className="ongoing-heading"> Ongoing Tournaments</span>
        </div>
      </div>
      <div className="card-list">
        <Link to="/grind2024" className="card-item">
          <img src={grind} alt="Card Image" />
          <span className="developer">THE GRIND</span>
          <h3>Qualifers for BGIS.</h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={Only} alt="Card Image" />
          <span className="designer">One Game Pro Championship</span>
          <h3>Result Declared! </h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
      </div>
      <div className="completed">
        <div className="completed-icon">
        <FontAwesomeIcon icon={faDatabase} />
          <span className="completed-heading"> Completed Tournaments</span>
        </div>
      </div>
      <div className="card-list">
        <Link to="/holi2024" className="card-item">
          <img src={HOLI2024} alt="Card Image" />
          <span className="developer">HOLI Face-off 2024</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={INKR} alt="Card Image" />
          <span className="designer">IN-KR INVITATIONAL 2023</span>
          <h3> </h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={BMPS2023} alt="Card Image" />
          <span className="developer">BMPS 2023</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={bgis2023} alt="Card Image" />
          <span className="designer">BGIS 2023</span>
          <h3> </h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={grind2023} alt="Card Image" />
          <span className="developer">THE GRIND 2023</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={BMSD2022} alt="Card Image" />
          <span className="designer">BMSD 2022</span>
          <h3> </h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={BMPS2022} alt="Card Image" />
          <span className="developer">BMPS S1</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={BMOC2022} alt="Card Image" />
          <span className="designer">BMOC 2022</span>
          <h3> </h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={bgis2021} alt="Card Image" />
          <span className="developer">BGIS 2021</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={grind2021} alt="Card Image" />
          <span className="developer">THE GRIND 2021</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
        <Link to="/Onegame" className="card-item">
          <img src={Launch} alt="Card Image" />
          <span className="developer">THE LAUNCH PARTY</span>
          <h3></h3>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Result;
