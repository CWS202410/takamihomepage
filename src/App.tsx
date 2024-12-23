import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu/index';
import { Info } from './components/Info';
import { Careers } from './components/Careers';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { FullMenu } from './pages/FullMenu';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Info />
            <Careers />
            <Reservation />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;