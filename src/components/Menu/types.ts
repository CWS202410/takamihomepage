export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  limited?: boolean | string;
}