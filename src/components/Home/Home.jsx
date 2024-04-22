import React from "react";
import "./Home.css";
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

function Home() {
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
        <Link to="/onegame" className="card-item">
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
      <div className="news">
        <div className="news-icon">
          <FontAwesomeIcon icon={faNewspaper} />
          <span class="news-heading"> Quick Updates & News </span>
        </div>
      </div>
      <div class="points-table ml-44 mt-7  ">
        <ul class="list-disc ml-4">
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              The second edition of the Battlegrounds Mobile India Series (BGIS)
              took place in September 2024.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              Team Enigma emerged as the champions, securing a spot in the
              prestigious PUBG Mobile World Championship
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              Krafton introduced several new maps and game modes to BGMI
              throughout 2024, including Nusa, Santorini, and Payload 2.0.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              BGMI witnessed a significant increase in esports partnerships and
              sponsorships in 2024.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              Major brands like Red Bull, Mountain Dew, and OnePlus partnered
              with tournaments and teams, further legitimizing the BGMI esports
              scene.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              Krafton actively engaged with the BGMI community through various
              initiatives, including social media contests, community
              tournaments, and developer Q&As.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              Krafton continued to implement robust anti-cheat measures to
              combat hacking and cheating in BGMI.
            </span>
          </li>
          <li class="points">
            <FontAwesomeIcon icon={faBomb} />
            <span class="news-text font-sans font-roboto">
              With the ongoing legal battle surrounding PUBG Mobile in India,
              the future of BGMI remains uncertain.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
