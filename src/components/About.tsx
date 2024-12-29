import React from 'react';
import { getOptimizedUrl } from '../lib/cloudinary';
import { ABOUT_IMAGE } from '../constants/cloudinaryImages';

export function About() {
  const aboutImageUrl = getOptimizedUrl({
    publicId: ABOUT_IMAGE.interior,
    width: 800
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">たかみについて</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              大阪・伊丹空港近くに店を構える、老舗焼肉店「焼肉ハウス たかみ」。
            </p>
            <p className="text-gray-600 leading-relaxed">
              創業当初から「地域でいちばん美味しい焼肉を届けたい」という想いを貫き、数多くの方々に“本当に美味しい焼肉”と評されるほどの支持をいただいてまいりました。
            </p>
            <p className="text-gray-600 leading-relaxed">
              大切な記念日やご家族での集まり、おひとりさまの気軽な食事まで、どんなシーンでも心からくつろげるアットホームな空間をご用意。
            </p>
            <p className="text-gray-600 leading-relaxed">
              これからも伝統を守りながら、新しい味わいやサービスにも挑戦し、ここでしか味わえない“至福の時間”を皆さまにお届けしてまいります。
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden">
            <img
              src={aboutImageUrl}
              srcSet={`
                ${getOptimizedUrl({ publicId: ABOUT_IMAGE.interior, width: 400 })} 400w,
                ${getOptimizedUrl({ publicId: ABOUT_IMAGE.interior, width: 600 })} 600w,
                ${getOptimizedUrl({ publicId: ABOUT_IMAGE.interior, width: 800 })} 800w
              `}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="店内の様子"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}