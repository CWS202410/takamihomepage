import React from 'react';
import { Instagram } from 'lucide-react';

export function Announcement() {
  return (
    <section className="bg-red-600 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            🕒 営業時間変更のお知らせ
          </h2>
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              平素より焼肉ハウスたかみをご利用いただき、誠にありがとうございます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">変更前</h3>
                <p className="text-sm">17:00～23:00（L.O 22:30）</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">変更後</h3>
                <p className="text-sm">17:00～22:30（L.O 22:00）</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              ※定休日：水曜日（年末年始1/30～1/3は休業）<br />
              ※変更日：2024年1月1日より
            </p>
            <p className="text-sm">
              ご不便をおかけいたしますが、何卒ご理解いただけますようお願いいたします。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm">
              最新情報はインスタグラムでご確認ください
            </p>
            <a
              href="https://www.instagram.com/yakiniku_takami/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
            >
              <Instagram size={20} />
              <span>Instagramで確認</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 