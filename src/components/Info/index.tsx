import React from 'react';
import { StoreDetails } from './StoreDetails';
import { AccessInfo } from './AccessInfo';
import { GoogleMap } from './GoogleMap';

export function Info() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">店舗情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <StoreDetails />
            <AccessInfo />
          </div>
          <div className="space-y-8">
            <GoogleMap />
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                ※地図をクリックすると大きな地図で見ることができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}