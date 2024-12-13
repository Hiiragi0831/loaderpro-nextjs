import fs from "fs";
import { create } from "xmlbuilder2";
import { api } from "@/services/api";
import translit from "@/utils/translit";

export default async function ymlGenerate() {
  const data = await api.getAllProducts();
  const products = data.filter((item) => item.price > 0).slice(0);
  const offer = products.map((item) => ({
    "@id": item.id,
    name: `${item.productname} ${item.brand} ${item.article}`,
    url: `${process.env.NEXT_PUBLIC_HOST}/products/${translit(item.productname.replaceAll(" ", "-"))}-${item.id}`,
    price: item.price,
    currencyId: "RUB",
    categoryId: 1,
    available: item.status.value === "green",
    picture: item.image,
    delivery: true,
    pickup: true,
    vendorCode: item.article,
    vendor: item.brand,
  }));

  const obj = {
    yml_catalog: {
      "@date": new Date(),
      shop: {
        name: "Запчасти для вилочных погрузчиков",
      },
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
  };

  // convert the XML tree to string
  const doc = create(obj);
  const xml = doc.end({ prettyPrint: true });

  fs.writeFile("./public/yandex-tovari.xml", xml, (err) => {
    if (err) throw err;
    console.log("YML has been saved!", obj);
  });
}
