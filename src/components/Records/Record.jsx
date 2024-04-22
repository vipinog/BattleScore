import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Result = () => {
  const [showMostRuns, setShowMostRuns] = useState(false);
  const [showBattingAverage, setShowBattingAverage] = useState(false);
  const [showBattingStrikeRate, setShowBattingStrikeRate] = useState(false);
  const [showHundreds, setShowHundreds] = useState(false);
  const [showFifties, setShowFifties] = useState(false);
  const [showFours, setShowFours] = useState(false);
  const [showSixes, setShowSixes] = useState(false);
  const [showLixes, setShowLixes] = useState(false);
  const [showFixes, setShowFixes] = useState(false);
  const [showDixes, setShowDixes] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "mostRuns":
        setShowMostRuns(!showMostRuns);
        break;
      case "battingAverage":
        setShowBattingAverage(!showBattingAverage);
        break;
      case "battingStrikeRate":
        setShowBattingStrikeRate(!showBattingStrikeRate);
        break;
      case "hundreds":
        setShowHundreds(!showHundreds);
        break;
      case "fifties":
        setShowFifties(!showFifties);
        break;
      case "fours":
        setShowFours(!showFours);
        break;
      case "sixes":
        setShowSixes(!showSixes);
        break;
      case "lixes":
        setShowLixes(!showLixes);
        break;
      case "fixes":
        setShowFixes(!showFixes);
        break;
      case "dixes":
        setShowDixes(!showDixes);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="Rec mt-36 ml-44">
        <div className="Rec-icon text-4xl">
          <FontAwesomeIcon icon={faClipboard} />
          <span className="Rec-heading text-3xl font-bold"> Several Records by Players and Orgs.</span>
        </div>
      </div>
      <div className="container mx-auto mt-4 mr-36 pl-36 pr-20 p-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <div
            onClick={() => toggleSection("mostRuns")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              Most Finishes in a single match of a tornament
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showMostRuns && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              Jonathan,16 finishes
            </div>
          )}
        </div>

        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("battingAverage")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              Highest finishes in Classic Match{" "}
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showBattingAverage && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              Lolzzz Gaming , 52 finishes
            </div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("battingStrikeRate")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              First Team to won Internationl Trophy
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showBattingStrikeRate && (
            <div className="mt-2 p-2 bg-gray-100 rounded">Team Soul</div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("hundreds")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              Highest Earning BGMI player (from eSports)
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showHundreds && (
            <div className="mt-2 p-2 bg-gray-100 rounded">Destro w.$91,181</div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("fifties")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              Highest Paid PUBG MOBILE player
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showFifties && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              Parl Jung Young aka Loki
            </div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("fours")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              First Player to get 100 Finishes in a single Tornament
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showFours && (
            <div className="mt-2 p-2 bg-gray-100 rounded">Goblin</div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("sixes")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">Team who won most Tornament</span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showSixes && (
            <div className="mt-2 p-2 bg-gray-100 rounded">Team Soul</div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("fixes")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">
              Highest Prize Pool of a Tornament
            </span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showFixes && (
            <div className="mt-2 p-2 bg-gray-100 rounded">BGIS 2024 , 2Cr</div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("lixes")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">Total Highest viewership</span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showLixes && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              200 Million Views , BGIS 2021
            </div>
          )}
        </div>
        <div className="bg-gray-200 p-4 rounded-md mt-4">
          <div
            onClick={() => toggleSection("dixes")}
            className="flex justify-between items-center cursor-pointer hover:bg-gray-300 p-2 rounded"
          >
            <span className="font-semibold">Total Highest TV Viewership</span>
            <span className="text-3xl font-bold">+</span>
          </div>
          {showDixes && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              12.3 Million , BGMS S01
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
