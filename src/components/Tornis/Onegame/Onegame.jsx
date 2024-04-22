import React from "react";
import "./Onegame.css";

function Onegame() {
  return (
    <div className="mt-24 ml-20">
    <h1 class="text-3xl font-bold  mb-4">Info</h1>
<hr class="w-1/4 border-t-2 border-blue-900  mb-8" />

<h2 class="text-xl font-semibold mb-2">Broadcast Talent</h2>
<ul class="list-disc ml-8">
  <li class="list-item">🟢 Gamezotech (Subodh Panwar)</li>
  <li class="list-item">🟢 RA1 (Vipul Kumar)</li>
  <li class="list-item">🟢 Spero (Piyush Bhatia)</li>
  <li class="list-item">🟢 TTRXD (Tanmoy Roy)</li>
</ul>

<h2 class="text-xl font-semibold mt-8 mb-2">Format</h2>
<ul class="list-disc ml-8">
  <li>
    <strong>BGMI OneGame: March 29th - April 17th</strong>
    <ul class="list-disc ml-8">
      <li>32 teams.</li>
      <li>Squad, TBD.</li>
    </ul>
  </li>
  <li>
    <strong>Quarter Finals : March 29th - 31st</strong>
    <ul class="list-disc ml-8">
      <li>
        32 teams.
        <ul class="list-disc ml-8">
          <li>26 invited teams.</li>
          <li>6 teams from Qualifiers.</li>
        </ul>
      </li>
      <li>3 matchdays.</li>
      <li>Teams are divided equally into 4 groups of 8 teams.</li>
      <li>Round-robin format.</li>
      <li><strong>Top 24 teams </strong>qualify for Semi Finals.</li>
    </ul>
  </li>
  <li>
    <strong>Semi Finals : April 2nd - 3rd</strong>
    <ul class="list-disc ml-8">
      <li>24 teams.</li>
      <li>2 matchdays.</li>
      <li>Teams are divided equally into 3 groups of 8 teams.</li>
      <li>Round-robin format.</li>
      <li><strong>Top 16 teams</strong> qualify for the Grand Finals</li>
    </ul>
  </li>
  <li>
    <strong>Grand Finals : April 8th - 10th, 15th - 17th</strong>
    <ul class="list-disc ml-8">
      <li>16 teams.</li>
      <li>6 matchdays.</li>
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
              <td class="px-4 py-2 bg-yellow-300">$4,781.81</td>
              <td class="px-4 py-2 bg-yellow-300">₹400,000</td>
              <td class="px-4 py-2 bg-yellow-300">🏆 Team SouL</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-yellow-200">🥈</td>
              <td class="px-4 py-2 bg-yellow-200">$2,390.90</td>
              <td class="px-4 py-2 bg-yellow-200">₹2,00,000</td>
              <td class="px-4 py-2 bg-yellow-200">🏆 GodLike Esports</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-yellow-100">🥉</td>
              <td class="px-4 py-2 bg-yellow-100">$1,195.45</td>
              <td class="px-4 py-2 bg-yellow-100">₹1,00,000</td>
              <td class="px-4 py-2 bg-yellow-100">🏆 Entity</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-gray-200">4th</td>
              <td class="px-4 py-2 bg-gray-200">$896.59</td>
              <td class="px-4 py-2 bg-gray-200">₹75,000</td>
              <td class="px-4 py-2 bg-gray-200">🏆 Revenent Esports</td>
            </tr>
            <tr>
              <td class="px-4 py-2 bg-gray-100">5th</td>
              <td class="px-4 py-2 bg-gray-100">$597.73</td>
              <td class="px-4 py-2 bg-gray-100">₹50,000</td>
              <td class="px-4 py-2 bg-gray-100">🏆 Hydra Esports</td>
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
            <td class="border px-4 py-2 bg-gray-200">MVP</td>
            <td class="border px-4 py-2 bg-gray-200">$597.73</td>
            <td class="border px-4 py-2 bg-gray-200">₹50,000</td>
            <td class="border px-4 py-2 bg-gray-200">🏆 Savitar</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 bg-gray-100">Fan Fav. Player</td>
            <td class="border px-4 py-2 bg-gray-100">$597.73</td>
            <td class="border px-4 py-2 bg-gray-100">₹50,000</td>
            <td class="border px-4 py-2 bg-gray-100">🏆 JONATHAN</td>
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
              <th class="px-4 py-2 bg-blue-500 text-white">Day 1</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Day 2</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Day 3</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Day 4</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Day 5</th>
              <th class="px-4 py-2 bg-blue-500 text-white">Day 6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-yellow-300">🥇🎮Team SouL</td>
              <td class="px-4 py-2 bg-yellow-300">275</td>
              <td class="px-4 py-2 bg-yellow-300">25</td>
              <td class="px-4 py-2 bg-yellow-300">36</td>
              <td class="px-4 py-2 bg-yellow-300">71</td>
              <td class="px-4 py-2 bg-yellow-300">37</td>
              <td class="px-4 py-2 bg-yellow-300">50</td>
              <td class="px-4 py-2 bg-yellow-300">56</td>
            </tr>
            <tr>
              <td className="bg-yellow-200">🥈🎮GodLike Esports</td>
              <td class="px-4 py-2 bg-yellow-200">257</td>
              <td class="px-4 py-2 bg-yellow-200">34</td>
              <td class="px-4 py-2 bg-yellow-200">61</td>
              <td class="px-4 py-2 bg-yellow-200">50</td>
              <td class="px-4 py-2 bg-yellow-200">32</td>
              <td class="px-4 py-2 bg-yellow-200">29</td>
              <td class="px-4 py-2 bg-yellow-200">51</td>
            </tr>
            <tr>
              <td className="bg-yellow-100">🥉🎮Entity</td>
              <td class="px-4 py-2 bg-yellow-100">254</td>
              <td class="px-4 py-2 bg-yellow-100">33</td>
              <td class="px-4 py-2 bg-yellow-100">45</td>
              <td class="px-4 py-2 bg-yellow-100">49</td>
              <td class="px-4 py-2 bg-yellow-100">37</td>
              <td class="px-4 py-2 bg-yellow-100">62</td>
              <td class="px-4 py-2 bg-yellow-100">28</td>
            </tr>
            <tr>
              <td className="bg-gray-300">4.🎮Revenant Esports</td>
              <td class="px-4 py-2 bg-gray-300">237</td>
              <td class="px-4 py-2 bg-gray-300">59</td>
              <td class="px-4 py-2 bg-gray-300">58</td>
              <td class="px-4 py-2 bg-gray-300">29</td>
              <td class="px-4 py-2 bg-gray-300">44</td>
              <td class="px-4 py-2 bg-gray-300">42</td>
              <td class="px-4 py-2 bg-gray-300">5</td>
            </tr>
            <tr>
              <td className="bg-gray-300">5.🎮Hydra</td>
              <td class="px-4 py-2 bg-gray-300">222</td>
              <td class="px-4 py-2 bg-gray-300">20</td>
              <td class="px-4 py-2 bg-gray-300">47</td>
              <td class="px-4 py-2 bg-gray-300">43</td>
              <td class="px-4 py-2 bg-gray-300">19</td>
              <td class="px-4 py-2 bg-gray-300">44</td>
              <td class="px-4 py-2 bg-gray-300">49</td>
            </tr>
            <tr>
              <td className="bg-gray-300">6.🎮WindGod Esports</td>
              <td class="px-4 py-2 bg-gray-300">219</td>
              <td class="px-4 py-2 bg-gray-300">28</td>
              <td class="px-4 py-2 bg-gray-300">34</td>
              <td class="px-4 py-2 bg-gray-300">32</td>
              <td class="px-4 py-2 bg-gray-300">25</td>
              <td class="px-4 py-2 bg-gray-300">41</td>
              <td class="px-4 py-2 bg-gray-300">59</td>
            </tr>
            <tr>
              <td className="bg-gray-300">7.🎮Enigma Gaming</td>
              <td class="px-4 py-2 bg-gray-300">208</td>
              <td class="px-4 py-2 bg-gray-300">42</td>
              <td class="px-4 py-2 bg-gray-300">24</td>
              <td class="px-4 py-2 bg-gray-300">28</td>
              <td class="px-4 py-2 bg-gray-300">46</td>
              <td class="px-4 py-2 bg-gray-300">17</td>
              <td class="px-4 py-2 bg-gray-300">51</td>
            </tr>
            <tr>
              <td className="bg-gray-300">8.🎮TWOB</td>
              <td class="px-4 py-2 bg-gray-300">181</td>
              <td class="px-4 py-2 bg-gray-300">29</td>
              <td class="px-4 py-2 bg-gray-300">42</td>
              <td class="px-4 py-2 bg-gray-300">10</td>
              <td class="px-4 py-2 bg-gray-300">28</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
              <td class="px-4 py-2 bg-gray-300">49</td>
            </tr>
            <tr>
              <td className="bg-gray-300">9.🎮Team Tamilas</td>
              <td class="px-4 py-2 bg-gray-300">180</td>
              <td class="px-4 py-2 bg-gray-300">38</td>
              <td class="px-4 py-2 bg-gray-300">42</td>
              <td class="px-4 py-2 bg-gray-300">33</td>
              <td class="px-4 py-2 bg-gray-300">21</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
            </tr>
            <tr>
              <td className="bg-gray-300">10.🎮Marcos Gaming</td>
              <td class="px-4 py-2 bg-gray-300">177</td>
              <td class="px-4 py-2 bg-gray-300">87</td>
              <td class="px-4 py-2 bg-gray-300">17</td>
              <td class="px-4 py-2 bg-gray-300">29</td>
              <td class="px-4 py-2 bg-gray-300">21</td>
              <td class="px-4 py-2 bg-gray-300">11</td>
              <td class="px-4 py-2 bg-gray-300">12</td>
            </tr>
            <tr>
              <td className="bg-gray-300">11.🎮TEAM INSANE</td>
              <td class="px-4 py-2 bg-gray-300">173</td>
              <td class="px-4 py-2 bg-gray-300">32</td>
              <td class="px-4 py-2 bg-gray-300">8</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
              <td class="px-4 py-2 bg-gray-300">37</td>
              <td class="px-4 py-2 bg-gray-300">49</td>
              <td class="px-4 py-2 bg-gray-300">24</td>
            </tr>
            <tr>
              <td className="bg-gray-300">12.🎮TEAM xSpark</td>
              <td class="px-4 py-2 bg-gray-300">169</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              <td class="px-4 py-2 bg-gray-300">42</td>
              <td class="px-4 py-2 bg-gray-300">33</td>
              <td class="px-4 py-2 bg-gray-300">-</td>
              <td class="px-4 py-2 bg-gray-300">51</td>
              <td class="px-4 py-2 bg-gray-300">30</td>
            </tr>
            <tr>
              <td className="bg-gray-300">13.🎮Gujarat Tigers</td>
              <td class="px-4 py-2 bg-gray-300">160</td>
              <td class="px-4 py-2 bg-gray-300">32</td>
              <td class="px-4 py-2 bg-gray-300">29</td>
              <td class="px-4 py-2 bg-gray-300">25</td>
              <td class="px-4 py-2 bg-gray-300">26</td>
              <td class="px-4 py-2 bg-gray-300">34</td>
              <td class="px-4 py-2 bg-gray-300">14</td>
            </tr>
            <tr>
              <td className="bg-gray-300">14.🎮Medal Esports</td>
              <td class="px-4 py-2 bg-gray-300">159</td>
              <td class="px-4 py-2 bg-gray-300">27</td>
              <td class="px-4 py-2 bg-gray-300">25</td>
              <td class="px-4 py-2 bg-gray-300">30</td>
              <td class="px-4 py-2 bg-gray-300">33</td>
              <td class="px-4 py-2 bg-gray-300">14</td>
              <td class="px-4 py-2 bg-gray-300">30</td>
            </tr>
            <tr>
              <td className="bg-gray-300">15.🎮Global Esports</td>
              <td class="px-4 py-2 bg-gray-300">129</td>
              <td class="px-4 py-2 bg-gray-300">16</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              <td class="px-4 py-2 bg-gray-300">37</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              <td class="px-4 py-2 bg-gray-300">31</td>
              <td class="px-4 py-2 bg-gray-300">19</td>
            </tr>
            <tr>
              <td className="bg-gray-300">16.🎮Skyfall</td>
              <td class="px-4 py-2 bg-gray-300">107</td>
              <td class="px-4 py-2 bg-gray-300">20</td>
              <td class="px-4 py-2 bg-gray-300">22</td>
              <td class="px-4 py-2 bg-gray-300">13</td>
              <td class="px-4 py-2 bg-gray-300">10</td>
              <td class="px-4 py-2 bg-gray-300">23</td>
              <td class="px-4 py-2 bg-gray-300">19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Onegame;
