import React from 'react';
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
  // URLのパスを取得
  const path = window.location.pathname;

  // パスに基づいて表示するコンテンツを切り替え
  if (path === '/menu') {
    return <FullMenu />;
  }

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