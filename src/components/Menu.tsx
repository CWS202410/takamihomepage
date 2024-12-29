import React from 'react';
import { menuItems } from './Menu/MenuItems';
import { MenuCard } from './Menu/MenuCard';

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">メニュー</h2>
        <p className="text-center text-gray-600 mb-12">厳選された逸品の数々をご用意しております</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}