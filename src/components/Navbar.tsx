import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('home');
    }
  };

  return (
    <nav className="bg-black/95 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="text-white font-bold text-xl hover:text-red-400 transition-colors"
            >
              焼肉ハウスたかみ
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleSectionClick('home')} className="text-white hover:text-red-400 transition-colors">ホーム</button>
              <button onClick={() => handleSectionClick('about')} className="text-white hover:text-red-400 transition-colors">たかみについて</button>
              <button onClick={() => handleSectionClick('menu')} className="text-white hover:text-red-400 transition-colors">メニュー</button>
              <button onClick={() => handleSectionClick('info')} className="text-white hover:text-red-400 transition-colors">店舗情報</button>
              <button onClick={() => handleSectionClick('careers')} className="text-white hover:text-red-400 transition-colors">採用情報</button>
              <button onClick={() => handleSectionClick('reservation')} className="text-white hover:text-red-400 transition-colors">ご予約</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <button onClick={() => handleSectionClick('home')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">ホーム</button>
            <button onClick={() => handleSectionClick('about')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">たかみについて</button>
            <button onClick={() => handleSectionClick('menu')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">メニュー</button>
            <button onClick={() => handleSectionClick('info')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">店舗情報</button>
            <button onClick={() => handleSectionClick('careers')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">採用情報</button>
            <button onClick={() => handleSectionClick('reservation')} className="block w-full text-left text-white hover:text-red-400 transition-colors px-3 py-2">ご予約</button>
          </div>
        </div>
      )}
    </nav>
  );
}