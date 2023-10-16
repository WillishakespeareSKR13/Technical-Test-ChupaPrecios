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

export type IProductWithQuantity = IProduct & { quantity: number };
export type IProducStorage = Record<string, IProductWithQuantity>;
