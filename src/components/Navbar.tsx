import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">焼肉ハウスたかみ</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-red-400 transition-colors">ホーム</a>
              <a href="#about" className="text-white hover:text-red-400 transition-colors">たかみについて</a>
              <a href="#menu" className="text-white hover:text-red-400 transition-colors">メニュー</a>
              <a href="#info" className="text-white hover:text-red-400 transition-colors">店舗情報</a>
              <a href="#careers" className="text-white hover:text-red-400 transition-colors">採用情報</a>
              <a href="#reservation" className="text-white hover:text-red-400 transition-colors">ご予約</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <a href="#home" className="block text-white hover:text-red-400 transition-colors px-3 py-2">ホーム</a>
            <a href="#about" className="block text-white hover:text-red-400 transition-colors px-3 py-2">たかみについて</a>
            <a href="#menu" className="block text-white hover:text-red-400 transition-colors px-3 py-2">メニュー</a>
            <a href="#info" className="block text-white hover:text-red-400 transition-colors px-3 py-2">店舗情報</a>
            <a href="#careers" className="block text-white hover:text-red-400 transition-colors px-3 py-2">採用情報</a>
            <a href="#reservation" className="block text-white hover:text-red-400 transition-colors px-3 py-2">ご予約</a>
          </div>
        </div>
      )}
    </nav>
  );
}