import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/footer';
import Disclaimer from './components/Disclaimer/disclaimer';

function App() {
  return (
    <>
    <Disclaimer />
    <Navbar />
    <Outlet /> 
    <Footer />  
    </>
  )
}

export default App;
