import { MenuItem } from './types';
import { getOptimizedUrl } from '../../lib/cloudinary';
import { MENU_IMAGES } from '../../constants/cloudinaryImages';

export const menuItems: MenuItem[] = [
  {
    name: '特選上ハラミ（上州黒毛和牛）',
    description: 'ハラミのおいしさに定評あり。最高級の上州黒毛和牛を、ジューシーな肉質と濃厚な味わいをお楽しみください。',
    price: '2,580',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.harami }),
    limited: true
  },
  {
    name: '特選上タン（上州黒毛和牛）',
    description: '厳選された上州黒毛和牛の上タンを贅沢に使用。とろけるような柔らかさと深い旨味が特徴の逸品です。',
    price: '2,580',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.tan }),
    limited: true
  },
  {
    name: '石焼ビビンバ',
    description: '本場韓国の味で仕込んだナムルと、香ばしいおこげが楽しめる石焼ビビンバ。ピリ辛コチュジャンとともに、熱々の石鍋で味わう贅沢な一品です！',
    price: '1,200',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.bibimbap }),
  },
  {
    name: 'あさりの貝汁',
    description: '新鮮なあさりの旨味が凝縮された逸品。焼肉との相性抜群。当店自慢の一品です。',
    price: '680',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.soup }),
  }
];