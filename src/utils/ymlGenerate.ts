import fs from "fs";
import { create } from "xmlbuilder2";
import { api } from "@/services/api";
import translit from "@/utils/translit";

export default async function ymlGenerate() {
  // * только запчасти * //
  const data = await api.getAllProductsLink("spare_parts");
  const total = data.total;
  const products: any = [];

  for (let i = 1; i <= total; i++) {
    const getResult = await api.getAllProductsLink(`spare_parts/?page=${i}`);
    const result = getResult.results;
    result
      .filter((item) => item.image?.length && item.price > 0)
      .slice(0)
      .map((item) => {
        products.push(item);
      });
  }

  // * Все товары с фильтром по цене * //
  // const data = await api.getAllProducts();
  // const products = data.filter((item) => item.price > 0).slice(0);

  const offer = products.map((item: any) => ({
    "@id": item.id,
    name: `${item.productname} ${item.brand} ${item.article}`,
    url: `${process.env.NEXT_PUBLIC_HOST}/products/${translit(item.productname.replaceAll(" ", "-"))}-${item.id}`,
    price: item.price,
    currencyId: "RUB",
    categoryId: 1,
    picture: item.image,
    delivery: true,
    pickup: true,
    vendorCode: item.article,
    vendor: item.brand,
  }));

  const obj = {
    yml_catalog: {
      "@date": new Date().toISOString(),
      shop: {
        name: "Запчасти для вилочных погрузчиков",
        company: "ООО «СПЕЦМАШИНА»",
        url: "http://loaderpro.ru/",
        platform: "Next.js",
        currencies: {
          currency: {
            "@id": "RUB",
            "@rate": "1",
          },
        },
        categories: {
          category: {
            "@id": "1",
            "#": "Запчасти",
          },
        },
        offers: {
          offer,
        },
      },
    },
  };

  // convert the XML tree to string
  const doc = create(obj);
  const xml = doc.end({ prettyPrint: true });

  fs.writeFile("./public/feed.xml", xml, (err) => {
    if (err) throw err;
    console.log("YML has been saved!", obj);
  });
}
