import React from 'react';
import { X } from 'lucide-react';
import { getOptimizedUrl } from '../lib/cloudinary';
import { MENU_IMAGES } from '../constants/cloudinaryImages';

export function FullMenu() {
  const menuImageUrl = getOptimizedUrl({
    publicId: MENU_IMAGES.fullMenu,
    width: 1200
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">メニュー一覧</h1>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <X className="mr-2" size={20} />
            閉じる
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={menuImageUrl}
            alt="メニュー一覧"
            className="w-full h-auto rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}