import React from 'react';

export function Careers() {
  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">採用情報</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-8">
              焼肉ハウスたかみでは、一緒に働いていただける仲間を募集しています。
            </p>

            <h3 className="text-xl font-bold mb-4">募集職種</h3>
            <ul className="list-disc list-inside mb-8 text-gray-600 space-y-2">
              <li>ホールスタッフ（アルバイト）</li>
              <li>キッチンスタッフ（アルバイト）</li>
              <li>職人（正社員）月収23万円〜、副料理長 30万円〜、料理長 40万円以上</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">アルバイトの待遇</h3>
            <ul className="list-disc list-inside mb-8 text-gray-600 space-y-2">
              <li>時給1,114円〜</li>
              <li>能力に応じて随時昇給あり！</li>
              <li>美味しいまかない付き！</li>
              <li>交通費支給（上限あり）</li>
              <li>シフト制（週2日から勤務可能）</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">応募資格</h3>
            <ul className="list-disc list-inside mb-8 text-gray-600 space-y-2">
              <li>18歳以上（高校生不可）</li>
              <li>未経験者歓迎</li>
              <li>接客が好きな方</li>
              <li>チームワークを大切にできる方</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                詳細な募集要項や待遇については、お電話またはメールにてお問い合わせください。
              </p>
              <div className="mt-4 text-gray-600">
                <p>TEL：06-6844-0200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}