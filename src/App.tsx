import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Info } from './components/Info';
import { Careers } from './components/Careers';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Info />
      <Careers />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;