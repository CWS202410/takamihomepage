import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

export function Footer() {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('home');
    }
  };

  const handleReservationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('reservation');
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="text-lg font-bold mb-4 hover:text-red-400 transition-colors inline-block"
            >
              焼肉ハウスたかみ
            </Link>
            <p className="text-gray-400 mt-4">
              最高級の黒毛和牛を<br />
              こころゆくまで。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">営業時間・定休日</h3>
            <p className="text-gray-400">
              営業時間：17:00～23:00（L.O. 22:30）<br />
              定休日：水曜日
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-400">
              Tel: <a href="tel:06-6844-0200" className="hover:text-red-400 transition-colors">06-6844-0200</a><br />
              Email: <a href="mailto:info@takami-29.co.jp" className="hover:text-red-400 transition-colors">info@takami-29.co.jp</a>
            </p>
            <button
              onClick={handleReservationClick}
              className="mt-4 text-white hover:text-red-400 transition-colors"
            >
              ご予約はこちら
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 焼肉ハウスたかみ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}