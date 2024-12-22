import React from 'react';
import { X } from 'lucide-react';
import { getOptimizedUrl } from '../../lib/cloudinary';
import { MENU_IMAGES } from '../../constants/cloudinaryImages';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  if (!isOpen) return null;

  const menuImageUrl = getOptimizedUrl({
    publicId: MENU_IMAGES.fullMenu,
    width: 1200
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="閉じる"
        >
          <X size={24} />
        </button>
        <div className="p-1">
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