import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}