import React from 'react';
import { FeatureCard } from './FeatureCard';
import { getOptimizedUrl } from '../../lib/cloudinary';
import { FEATURE_IMAGES } from '../../constants/cloudinaryImages';

export function Feature() {
  const features = [
    {
      title: '先代の想いを受け継ぐ一流ホテル仕様の上州和牛',
      description: '職人の目利きによって選び抜かれた最高級の上州和牛を使用しています。上質なサシとコクのある旨みが特徴で、国内の一流ホテルからも認められるハイクラスな肉質です。',
      imageSrc: getOptimizedUrl({
        publicId: 'here_use2j0',
        width: 800
      })
    },
    {
      title: '51年の歴史が生み出す旨みと香り',
      description: '創業以来51年にわたって継承されてきたレシピをもとに、毎月仕込むたびにさらに磨き上げられてきた秘伝のタレ。時代とともに改良と工夫を加え、より深く、より香り高い味わいへと進化し続けています。',
      imageSrc: getOptimizedUrl({
        publicId: FEATURE_IMAGES.sauce,
        width: 800
      })
    },
    {
      title: '伝統と新しさの融合で生まれる至福の一皿',
      description: '秘伝のタレをベースに、オリジナルのスパイスや調味料を加えた桜ユッケも人気の逸品です。定番の「焼肉のタレ」だけでなく、辛味を利かせたピリ辛ダレや、旨みをさらに引き立てる特製だれなど、さまざまな表情を楽しめます。',
      imageSrc: getOptimizedUrl({
        publicId: 'yukke_atphbh',
        width: 800
      })
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">極上の上州黒毛和牛 × 秘伝のタレが織りなす「匠の味」</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            創業から51年、先代から継承された伝統のタレと、厳選を重ねた最高級の上州黒毛和牛。<br />代々受け継がれ、さらに磨き上げられたその味わいを、ぜひご堪能ください。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}