import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            最高級の黒毛和牛を<br />こころゆくまで
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            最高級の上州黒毛和牛と<br />伝統の味をご堪能ください
          </p>
          <a
            href="#reservation"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            ご予約はこちら
          </a>
        </div>
      </div>
    </section>
  );
}