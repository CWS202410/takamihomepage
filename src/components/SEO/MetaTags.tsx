import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function MetaTags({
  title = '焼肉たかみ - 老舗の味 最高級黒毛和牛をご提供します',
  description = '最高級のお肉を提供する焼肉屋です。予約も簡単！ぜひお越しください。',
  image = 'https://res.cloudinary.com/dhai2dad2/image/upload/v1734331445/here_use2j0.jpg',
  url = 'https://yakiniku-takami.com'
}: MetaTagsProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="焼肉,焼肉屋,美味しい焼肉,焼肉予約,焼肉レストラン,上州和牛,大阪,豊中市" />

      {/* OGP */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="焼肉たかみ" />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* その他の重要なメタタグ */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ja" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}