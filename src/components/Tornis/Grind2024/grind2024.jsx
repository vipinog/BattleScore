import React from "react";
import TBD from "./tbd.png";

function grind2024() {
  return (
    <div className="mt-24 ml-20">
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4">Info</h1>
        <hr class="w-1/4 border-t-2 border-blue-900  mb-8" />
        <div class=" rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-xl font-bold mb-4">Broadcast Talent</h2>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-2">Hindi Commentators:</h3>
              <ul class="list-disc pl-4">
                <li>AnkiiBOT (Ankit Pandey)</li>
                <li>DarshCasts (Darshita)</li>
                <li>Insane Arena (Sandeep Singh Panchpal)</li>
                <li>Mazy (Zishan Alam)</li>
                <li>RA1 (Vipul Kumar)</li>
                <li>SardarjYT (Harshdeep Singh)</li>
                <li>Spero (Piyush Bhatla)</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">English Commentators:</h3>
              <ul class="list-disc pl-4">
                <li>Arka (Arka Sagar)</li>
                <li>Fyxs (Amrit Gourav)</li>
                <li>Nekrou (Neeraj Sangle)</li>
                <li>Saltyy (Akash Kolay)</li>
                <li>SuperJonny (Varun John)</li>
                <li>Tania</li>
              </ul>
            </div>
          </div>
        </div>
        <div class=" rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Format</h2>
          <ul class="list-disc pl-4">
            <li class="mb-2">BGIS 2024 - The Grind: April 4th - 28th, 2024</li>
            <li class="mb-2">256 Invited Teams.</li>
            <li class="mb-2">
              Teams divided into 16 groups with 16 squads in each group.
            </li>
            <li class="mb-2">Each group will play 3 matches in 2 weeks.</li>
            <li class="mb-2">
              After 2 weeks, Based on the overall standings teams are again
              divided into 16 groups.
            </li>
            <li class="mb-2">
              Again, each group will play 3 matches for next 2 weeks.
            </li>
            <li class="mb-2">
              Top 64 teams based on the overall standings of 4 weeks will
              advance to BGIS 2024: Main Event
            </li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4">Points System</h1>
        <hr class="w-1/4 border-t-2 border-blue-900  mb-8" />
        <div class=" rounded-lg  p-6">
          <h2 class="text-xl font-bold mb-4">Match Points Distribution</h2>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p class="text-lg text-gray-600 mb-2">
                Elimination Points: 1 per elimination
              </p>
            </div>
          </div>
          <table class="">
            <tbody>
              <tr>
                <td class="py-2 px-4 bg-orange-100">1st</td>
                <td class="py-2 px-4 bg-yellow-100">10</td>
                <td class="py-2 px-4 bg-orange-100">5th</td>
                <td class="py-2 px-4 bg-yellow-100">3</td>
              </tr>
              <tr>
                <td class="py-2 px-4 bg-orange-100">2nd</td>
                <td class="py-2 px-4 bg-yellow-100">6</td>
                <td class="py-2 px-4 bg-orange-100">6th</td>
                <td class="py-2 px-4 bg-yellow-100">2</td>
              </tr>
              <tr>
                <td class="py-2 px-4 bg-orange-100">3rd</td>
                <td class="py-2 px-4 bg-yellow-100">5</td>
                <td class="py-2 px-4 bg-orange-100">7th - 8th</td>
                <td class="py-2 px-4 bg-yellow-100">1</td>
              </tr>
              <tr>
                <td class="py-2 px-4 bg-orange-100">4th</td>
                <td class="py-2 px-4 bg-yellow-100">4</td>
                <td class="py-2 px-4 bg-orange-100">9th - 16th</td>
                <td class="py-2 px-4 bg-yellow-100">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-8">
          <h1 class="text-3xl font-bold mb-4">Tournament Schedule</h1>
          <hr class="w-1/4 border-t-2 border-blue-900  mb-8" />
          <table class="">
            <thead>
              <tr>
                <th class="py-2 px-4 bg-gray-300">Week</th>
                <th class="py-2 px-4 bg-gray-300">Matchdays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b bg-gray-200">1</td>
                <td class="py-2 px-4 border-b bg-gray-200">April 4th - 7th</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b bg-gray-200">2</td>
                <td class="py-2 px-4 border-b bg-gray-200">
                  April 11th - 14th
                </td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b bg-gray-200">3</td>
                <td class="py-2 px-4 border-b bg-gray-200">
                  April 18th - 21st
                </td>
              </tr>
              <tr>
                <td class="py-2 px-4 bg-gray-200">4</td>
                <td class="py-2 px-4 bg-gray-200">April 25th - 28th</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 class="text-3xl mt-12 font-bold mb-4">Grand Finale</h1>
        <hr class="w-1/3 border-t-2 border-blue-900  mb-8" />
        <img src={TBD} />
      </div>
    </div>
  );
}

export default grind2024;
