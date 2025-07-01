import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export function StoreDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">住所</h3>
          <p className="text-gray-600">
            〒560-0034<br />
            <a
              href="https://goo.gl/maps/ghR75n7UGrmAU1Xi9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              大阪府豊中市蛍池北町3丁目2番8号美登ビル2F
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">営業時間・定休日</h3>
          <p className="text-gray-600">
            営業時間：17:00～22:00（L.O. 21:30）<br />
            定休日：火曜・水曜
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">お問い合わせ</h3>
          <p className="text-gray-600">
            TEL：<a
              href="tel:06-6844-0200"
              className="hover:text-red-600 transition-colors"
            >
              06-6844-0200
            </a>
          </p>
          <a
            href="tel:06-6844-0200"
            className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>電話で予約する</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}