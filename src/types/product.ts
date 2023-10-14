export type IProduct = {
  id: number;
  title: string;
  price: number;
  priceOffer: number;
  hasOffer: boolean;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
