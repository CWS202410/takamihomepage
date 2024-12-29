import React from 'react';
import { Train, Car, Plane } from 'lucide-react';

export function AccessInfo() {
  return (
    <div className="space-y-8 mt-8">
      <div className="flex items-start space-x-4">
        <Train className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">電車でお越しのお客様</h3>
          <ul className="text-gray-600 space-y-1">
            <li>阪急宝塚線「蛍池駅」、大阪モノレール「蛍池駅」から徒歩8分</li>
            <li>大阪モノレール「大阪空港駅」から徒歩12分</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Car className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">お車でお越しのお客様</h3>
          <div className="text-gray-600 space-y-2">
            <p>専用駐車場はございません。</p>
            <p>当店隣の「タイムズ駐車場」をご利用ください。<br />
            満車の場合、近隣の駐車場もご利用いただけます。</p>
            <p className="text-sm bg-gray-50 p-3 rounded">
              ※駐車場サービス券はタイムズ駐車場のみ対応しており、1組様につき1時間分を提供しておりますのでご了承ください。
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Plane className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold mb-2">大阪伊丹空港をご利用のお客様</h3>
          <ul className="text-gray-600 space-y-1">
            <li>伊丹空港から徒歩12分でご来店いただけます。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}