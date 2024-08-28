export type Product = {
  id: number;
  productname: string;
  brand?: number;
  article?: number;
  price: number;
  count?: number;
  image?: string;
  status: string;
  description?: string;
  weight?: number;
  options?: [
    {
      id: number;
      name: string;
      value: string;
    },
  ];
};

// "id": "3",
//   "productname": "Мотор гидравлический",
//   "brand": "1",
//   "article": "51304684",
//   "price": "85417",
//   "count": "0",
//   "img-drop": "fe29c2e2c1c553b7449f00aec7cc7bd4.png"

// [
//   {
//     "id": "1",
//     "productname": "Мотор гидравлический",
//     "searchname": "Мотор гидравлический JUNGHEINRICH (269) 51304684",
//     "brand": "1",
//     "article": "51304684",
//     "price": "85417",
//     "count": "0",
//     "options": [
//       {
//         "id": "1",
//         "name": "Качество",
//         "value": "OEM"
//       },
//       {
//         "id": "2",
//         "name": "Качество",
//         "value": "Аналог"
//       },
//       {
//         "id": "3",
//         "name": "Качество",
//         "value": "Оригинал\r\n"
//       }
//     ],
//     "weight": "7,24",
//     "description": "",
//     "img-drop": [
//       "b841584de7d1645c72d3db9679642491.jpeg",
//       "b841584de7d1645c72d3db9679642491.jpeg",
//       "b841584de7d1645c72d3db9679642491.jpeg"
//     ]
//   }
// ]
