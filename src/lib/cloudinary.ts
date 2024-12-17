import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  },
  url: {
    secure: true
  }
});

interface ImageConfig {
  publicId: string;
  width?: number;
}

export const getOptimizedUrl = ({ publicId, width = 800 }: ImageConfig) => {
  return `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,c_scale,w_${width}/${publicId}`;
};