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
              焼肉ハウスたかみは、大阪・伊丹空港近くで長年にわたり営業を続けてきた老舗の焼肉店です。創業以来、地域の皆さまに支えられながら、美味しさと心温まるサービスを追求し、多くのお客様にご愛顧いただいております。
            </p>
            <p className="text-gray-600 leading-relaxed">
              当店では、最高級の上州黒毛和牛を使用したお肉をご提供しています。肉本来の旨味を堪能していただけるよう、厚切りのステーキスタイルでお楽しみいただけます。特にタンとハラミは格別です。焼肉を引き立てる秘伝のタレや、こだわりのキムチ、ユッケなど、長年受け継がれてきた当店ならではの逸品も自慢です。
            </p>
            <p className="text-gray-600 leading-relaxed">
              ご家族やグループでの楽しいひとときから、おひとりさま、特別な日のお食事まで、さまざまなシーンでご利用いただけます。
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