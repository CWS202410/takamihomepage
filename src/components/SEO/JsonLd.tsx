import React from 'react';

interface JsonLdProps {
  url: string;
}

export function JsonLd({ url }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: '焼肉たかみ',
    image: 'https://res.cloudinary.com/dhai2dad2/image/upload/v1734331445/here_use2j0.jpg',
    '@id': url,
    url,
    telephone: '06-6844-0200',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '蛍池北町3丁目2番8号',
      addressLocality: '豊中市',
      addressRegion: '大阪府',
      postalCode: '560-0034',
      addressCountry: 'JP'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.79570216229274,
      longitude: 135.4433616187661
    },
    servesCuisine: '焼肉',
    priceRange: '¥¥¥',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '17:00',
      closes: '23:00'
    },
    menu: url + '#menu',
    acceptsReservations: 'True'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}