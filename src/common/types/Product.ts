export type SingleProduct = {
  id: number;
  productname: string;
  brand: string;
  article: string;
  price: number;
  count?: number;
  image: [];
  status: {
    id: number;
    name: string;
    value: string;
  };
  description?: string;
  weight?: string;
  options?: [
    {
      name: string;
      value: string;
    },
  ];
};

export type Product = {
  id: number;
  productname: string;
  brand?: string;
  article?: string;
  price: number;
  count?: number;
  image?: string;
  status: {
    id: number;
    name: string;
    value: string;
  };
};

export type Products = {
  page: number;
  total: number;
  results: [Product];
};

// {
//   "id": 4051,
//   "productname": "Шина пневматическая 23.5-25 20PR BKT GR 288 191A2/167A8 G-2/L-2 TL",
//   "brand": "BKT",
//   "article": "R00298",
//   "price": 201852,
//   "count": 1,
//   "image": "https://image.loaderpro.ru/products/bk_tyres/R00298.jpg",
//   "status": {
//   "id": 2,
//     "name": "1-2 дня",
//     "value": "green"
// }
// },
