import React from 'react';
import { getOptimizedUrl } from '../lib/cloudinary';
import { HERO_IMAGE } from '../constants/cloudinaryImages';
import { Instagram } from 'lucide-react';

export function Hero() {
  const heroImageUrl = getOptimizedUrl({
    publicId: HERO_IMAGE.background,
    width: 1920, // デスクトップサイズの幅
  });

  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${heroImageUrl}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            極上の美味しさを<br />こころゆくまで
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            創業51年<br />最高級の上州黒毛和牛と<br />伝統の味をご堪能ください
          </p>
          <a
            href="https://www.instagram.com/yakiniku_takami/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-red-600/90 rounded-lg p-4 mb-8 inline-block hover:bg-red-700/90 transition-colors">
              <p className="text-white font-bold">
                営業時間変更のお知らせ<br />
                <span className="text-sm">詳しくはInstagramをご確認ください</span>
              </p>
            </div>
          </a>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm">詳しくはInstagramをご確認ください</span>
            <a
              href="https://www.instagram.com/yakiniku_takami/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:scale-110"
              aria-label="Instagramで詳しく見る"
            >
              <Instagram size={20} />
            </a>
          </div>
          <div>
            <a
              href="#reservation"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              ご予約はこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}