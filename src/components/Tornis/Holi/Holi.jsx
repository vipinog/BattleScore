import React from "react";

function Holi() {
  return (
    <div className="mt-24 ml-20">
      <h1 class="text-3xl font-bold  mb-4">Info</h1>
      <hr class="w-1/4 border-t-2 border-blue-900  mb-8" />

      <h2 class="text-xl font-semibold mb-2">Broadcast Talent</h2>
      <ul class="list-disc ml-8">
        <li class="list-item">🟢 AnkiiBOT (Ankit Pandey)</li>
        <li class="list-item">🟢 Mazy (Zishan Alam)</li>
        <li class="list-item">🟢 SuperJonny (Varun John)</li>
      </ul>

      <h2 class="text-xl font-semibold mt-8 mb-2">Format</h2>
      <ul class="list-disc ml-8">
        <li>
          <strong>Holi face-Off:</strong> March 23rd-24th
          <ul class="list-disc ml-8">
            <li>16 teams.</li>
            <li>2 Matchday</li>
          </ul>
        </li>
        <li>
          <strong>Day1:</strong> March 23rd
          <ul class="list-disc ml-8">
            <li>
              <ul class="list-disc ml-8">
                <li>16 teams will play Payload mode.</li>
                <li>4 matches.</li>
                <li><strong>Top 8 teams</strong>qualify for Arena Battle on Day 2.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Day2:</strong> March 24
          <ul class="list-disc ml-8">
            <li>8 teams.</li>
            <li>Arena</li>
            <li>Single-elimination bracket</li>
            <li>All matches are Best-of-1. Final is Best-of-3</li>
          </ul>
        </li>
      </ul>

      <div class="container mx-auto  ">
        <h1 class="text-3xl font-bold  my-4 mt-12">Prize Pool</h1>
        <hr class="w-1/2 border-t-2 border-blue-900" />
        <table class="table-auto w-full my-8">
          <thead>
            <tr>
              <th class="px-4 py-2 bg-blue-500 text-white">Place</th>
              <th class="px-4 py-2 bg-blue-500 text-white">$ USD</th>
              <th class="px-4 py-2 bg-blue-500 text-white">₹ INR</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Participant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 bg-yellow-300">🥇</td>
              <td class="px-4 py-2 bg-yellow-300">$2,990</td>
              <td class="px-4 py-2 bg-yellow-300">₹2,50,000</td>
              <td class="px-4 py-2 bg-yellow-300">🏆 Team Red Parasite</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-yellow-200">🥈</td>
              <td class="px-4 py-2 bg-yellow-200">$1,794</td>
              <td class="px-4 py-2 bg-yellow-200">₹1,50,000</td>
              <td class="px-4 py-2 bg-yellow-200">🏆 Team Ronak</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-yellow-100">🥉</td>
              <td class="px-4 py-2 bg-yellow-100">$1,196</td>
              <td class="px-4 py-2 bg-yellow-100">₹1,00,000</td>
              <td class="px-4 py-2 bg-yellow-100">🏆 Team Mavi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 class="text-3xl font-bold  my-2 mt-12">MVP</h1>
      <hr class="w-1/4 border-t-2 border-blue-900" />

      <table class="table-auto border-collapse mt-2">
        <thead>
          <tr>
            <th class="border px-4 py-2 bg-blue-500 text-white">Award</th>
            <th class="border px-4 py-2 bg-blue-500 text-white">$ USD</th>
            <th class="border px-4 py-2 bg-blue-500 text-white">INR</th>
            <th class="border px-4 py-2 bg-blue-500 text-white">Participant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 bg-gray-200">Most Finishes</td>
            <td class="border px-4 py-2 bg-gray-200">$598</td>
            <td class="border px-4 py-2 bg-gray-200">₹50,000</td>
            <td class="border px-4 py-2 bg-gray-200">🏆 GamlaBoy</td>
          </tr>
         
        </tbody>
      </table>
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold  my-4 mt-12">Grand Finals</h1>
        <hr class="w-full border-t-2 border-blue-900" />
        <table class="table-auto w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr>
              <th class="px-4 py-2 bg-blue-500 text-white">Team</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Total</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Match 1</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Match 2</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Match 3</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Match 4</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-yellow-300">🥇🎮Team iFlick</td>
              <td class="px-4 py-2 bg-yellow-300">109</td>
              <td class="px-4 py-2 bg-yellow-300">28</td>
              <td class="px-4 py-2 bg-yellow-300">17</td>
              <td class="px-4 py-2 bg-yellow-300">23</td>
              <td class="px-4 py-2 bg-yellow-300">41</td>
             
            </tr>
            <tr>
              <td className="bg-yellow-200">🥈🎮Team Rad Parasite</td>
              <td class="px-4 py-2 bg-yellow-200">83</td>
              <td class="px-4 py-2 bg-yellow-200">1</td>
              <td class="px-4 py-2 bg-yellow-200">20</td>
              <td class="px-4 py-2 bg-yellow-200">14</td>
              <td class="px-4 py-2 bg-yellow-200">48</td>
              
            </tr>
            <tr>
              <td className="bg-yellow-100">🥉🎮Team Goblin</td>
              <td class="px-4 py-2 bg-yellow-100">71</td>
              <td class="px-4 py-2 bg-yellow-100">19</td>
              <td class="px-4 py-2 bg-yellow-100">21</td>
              <td class="px-4 py-2 bg-yellow-100">9</td>
              <td class="px-4 py-2 bg-yellow-100">22</td>
            
            </tr>
            <tr>
              <td className="bg-gray-300">4.🎮Team Ronak</td>
              <td class="px-4 py-2 bg-gray-300">56</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">12</td>
              <td class="px-4 py-2 bg-gray-300">10</td>
              <td class="px-4 py-2 bg-gray-300">34</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">5.🎮Team Mavi</td>
              <td class="px-4 py-2 bg-gray-300">55</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
              <td class="px-4 py-2 bg-gray-300">11</td>
              <td class="px-4 py-2 bg-gray-300">1</td>
              <td class="px-4 py-2 bg-gray-300">34</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">6.🎮Team ClassifiedYT</td>
              <td class="px-4 py-2 bg-gray-300">53</td>
              <td class="px-4 py-2 bg-gray-300">5</td>
              <td class="px-4 py-2 bg-gray-300">24</td>
              <td class="px-4 py-2 bg-gray-300">2</td>
              <td class="px-4 py-2 bg-gray-300">22</td>
            
            </tr>
            <tr>
              <td className="bg-gray-300">7.🎮Team Alpha Clasher</td>
              <td class="px-4 py-2 bg-gray-300">51</td>
              <td class="px-4 py-2 bg-gray-300">16</td>
              <td class="px-4 py-2 bg-gray-300">19</td>
              <td class="px-4 py-2 bg-gray-300">3</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">8.🎮Team Mortal</td>
              <td class="px-4 py-2 bg-gray-300">49</td>
              <td class="px-4 py-2 bg-gray-300">3</td>
              <td class="px-4 py-2 bg-gray-300">7</td>
              <td class="px-4 py-2 bg-gray-300">8</td>
              <td class="px-4 py-2 bg-gray-300">31</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">9.🎮Team Dynamo</td>
              <td class="px-4 py-2 bg-gray-300">43</td>
              <td class="px-4 py-2 bg-gray-300">5</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">34</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">10.🎮Team Antaryami</td>
              <td class="px-4 py-2 bg-gray-300">43</td>
              <td class="px-4 py-2 bg-gray-300">2</td>
              <td class="px-4 py-2 bg-gray-300">25</td>
              <td class="px-4 py-2 bg-gray-300">10</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">11.🎮TEAM Sc0ut</td>
              <td class="px-4 py-2 bg-gray-300">41</td>
              <td class="px-4 py-2 bg-gray-300">2</td>
              <td class="px-4 py-2 bg-gray-300">25</td>
              <td class="px-4 py-2 bg-gray-300">10</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">12.🎮TEAM BZA</td>
              <td class="px-4 py-2 bg-gray-300">37</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              <td class="px-4 py-2 bg-gray-300">3</td>
              <td class="px-4 py-2 bg-gray-300">18</td>
              <td class="px-4 py-2 bg-gray-300">3</td>
            
            </tr>
            <tr>
              <td className="bg-gray-300">13.🎮Team Jonathan</td>
              <td class="px-4 py-2 bg-gray-300">12</td>
              <td class="px-4 py-2 bg-gray-300">1</td>
              <td class="px-4 py-2 bg-gray-300">7</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
             
            </tr>
            <tr>
              <td className="bg-gray-300">14.🎮Team Kaztro</td>
              <td class="px-4 py-2 bg-gray-300">6</td>
              <td class="px-4 py-2 bg-gray-300">3</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">1</td>
              <td class="px-4 py-2 bg-gray-300">2</td>
              
            </tr>
            <tr>
              <td className="bg-gray-300">15.🎮Team Owais</td>
              <td class="px-4 py-2 bg-gray-300">6</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">1</td>
              <td class="px-4 py-2 bg-gray-300">5</td>
            
            </tr>
            <tr>
              <td className="bg-gray-300">16.🎮Team Shreeman Legend</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
              <td class="px-4 py-2 bg-gray-300">4</td>
              <td class="px-4 py-2 bg-gray-300">0</td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Holi;
