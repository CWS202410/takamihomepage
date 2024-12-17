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
    name: '特選ヘレ',
    description: '特選ヘレ肉は牛肉の中でも最も柔らかく、上品な旨味を誇る希少部位。口の中でとろける極上の味わいを、ぜひご堪能ください。',
    price: '4,280',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.here }),
    limited: '数量限定'
  },
  {
    name: 'あさりの貝汁',
    description: '新鮮なあさりの旨味が凝縮された逸品。焼肉との相性抜群。当店自慢の一品です。',
    price: '680',
    image: getOptimizedUrl({ publicId: MENU_IMAGES.soup }),
  }
];