import React from "react";
import logos from "./images/bsl-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col lg:flex-row items-center"
            styles="margin-bottom: -70px;"
          >
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="Rec-icon text-4xl">
                <FontAwesomeIcon icon={faGamepad} />
                <span className="Rec-heading text-3xl ml-1 font-bold">
                  BattleScore :
                </span>
              </div>
              <p className="mt-4 text-lg font-bold text-gray-500">
                BattleScore is a live scoring and news content platform for
                eSports like BGMI and PUBG MOBILE.
              </p>
            </div>

            <div className="lg:w-1/2">
              <img src={logos} alt="About Us" className="" />
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0 mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What we are Building ?
            </h2>
            <p className="mt-4 text-lg font-bold text-gray-500">
              We are building a one-stop solution for eSports lovers to enjoy
              live scoring of their favorite game tournaments and to stay up to
              date on the Indian gaming community.
            </p>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0 mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Future !
            </h2>
            <p className="mt-4 text-lg font-bold text-gray-500">
              Initially, we focused on BGMI and the Indian region, but as we
              grow, we will definitely expand to other popular eSports like PUBG
              GLOBAL, VALORANT. catering to the global audience.
            </p>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0 mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Who's Building ?
            </h2>
            <p className="mt-4 text-lg font-bold text-gray-500">
              Not too many, just my friend and me, both pursuing B.Tech,
              who are completely obsessed with eSports, particularly BGMI and
              PUBG MOBILE. We're eager to build cool things around it.
            </p>
          </div>
{/*           <div className="lg:w-1/2 mb-8 lg:mb-0 mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              drth
            </h2>
            <p className="mt-4 text-lg font-bold text-gray-500">
              Let's
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
