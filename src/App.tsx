import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Feature } from './components/Feature';
import { About } from './components/About';
import { Menu } from './components/Menu/index';
import { Info } from './components/Info';
import { Careers } from './components/Careers';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { FullMenu } from './pages/FullMenu';
import { MetaTags } from './components/SEO/MetaTags';
import { JsonLd } from './components/SEO/JsonLd';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const baseUrl = 'https://yakiniku-takami.com';

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <MetaTags url={baseUrl + location.pathname} />
        <JsonLd url={baseUrl + location.pathname} />
        <Routes>
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Feature />
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
    </HelmetProvider>
  );
}

export default App;