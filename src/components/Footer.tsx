import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">焼肉ハウスたかみ</h3>
            <p className="text-gray-400">
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
              Tel: 06-6844-0200<br />
              Email: info@takami-29.co.jp
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 焼肉ハウスたかみ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}