import React from 'react';
import type { MenuItem } from './types';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const [imageError, setImageError] = React.useState(false);

  const getImageUrl = (publicId: string, width: number) => {
    return `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,c_scale,w_${width}/${publicId}`;
  };

  const getPublicId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 1].split('.')[0];
  };

  const publicId = getPublicId(item.image);
  const srcSet = [400, 600, 800]
    .map(width => `${getImageUrl(publicId, width)} ${width}w`)
    .join(', ');

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-64 overflow-hidden">
        <img
          src={item.image}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={item.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-red-600 font-bold">¥{item.price}</p>
        </div>
        <p className="text-gray-600 mb-2">{item.description}</p>
        {item.limited && (
          <p className="text-sm text-red-600">
            ※{typeof item.limited === 'string' ? item.limited : '数量限定'}
          </p>
        )}
      </div>
    </div>
  );
}