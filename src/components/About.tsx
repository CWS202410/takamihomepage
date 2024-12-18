import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">たかみについて</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              焼肉ハウスたかみは、大阪・伊丹空港近くで長年愛されてきた老舗の名店です。創業以来、本場韓国の伝統的な味付けを大切にし、地域の皆さまだけでなく、芸能人や有名人にもご利用いただいてきました。
            </p>
            <p className="text-gray-600 leading-relaxed">
              当店の自慢は、最高級の上州黒毛和牛。厚切りのステーキスタイルで、肉本来の旨味を存分にお楽しみいただけます。特にタンとハラミは絶品です。また、秘伝のタレやこだわりのキムチ、ユッケなど、焼肉を引き立てる逸品もご用意。
            </p>
            <p className="text-gray-600 leading-relaxed">
              ご家族やグループ、特別な日のお食事にもぜひご利用ください！
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
              alt="店内の様子"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}