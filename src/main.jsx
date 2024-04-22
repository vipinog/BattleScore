import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css';
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Live from './components/Live/Live.jsx';
import Result from './components/Result/Result.jsx';
import Record from './components/Records/Record.jsx';
import Onegame from './components/Tornis/Onegame/Onegame.jsx';
import Grind2024 from './components/Tornis/Grind2024/grind2024.jsx';
import Holi from './components/Tornis/Holi/Holi.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='live' element={<Live />} />
      <Route path='result' element={<Result />} />
      <Route path='records' element={<Record />} />
      <Route path='onegame' element={<Onegame />} />
      <Route path='grind2024' element={<Grind2024 />} />
      <Route path='holi2024' element={<Holi />} />
      <Route path='*' element={<div className='flex justify-between items-center cursor-pointer font-bold text-5xl mt-24 ml-8'>Bazzinga:)</div>} />
    </Route>
  )
)


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


