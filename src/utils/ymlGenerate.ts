import fs from "fs";
import { create } from "xmlbuilder2";
import { api } from "@/services/api";
import translit from "@/utils/translit";

const offer = (products: any[]) => {
  return products.map((item: any) => ({
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
};

const ymlCatalog = (offer: any) => {
  return {
    yml_catalog: {
      "@date": new Date().toISOString(),
      shop: {
        name: "Запчасти для вилочных погрузчиков",
        company: "ООО «СПЕЦМАШИНА»",
        url: "https://loaderpro.ru/",
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
};

const generateFile = (xml: any, name: any) => {
  fs.writeFile(`./public/${name}.xml`, xml, (err) => {
    if (err) throw err;
    console.log(`YML has been saved! ${name}.xml`);
  });
};

export default async function ymlGenerate() {
  const sparePartsData = await api.getAllProductsLink("spare_parts");
  const sparePartsTotal = sparePartsData.total;
  const sparePartsProducts: any = [];
  const allProducts = await api.getAllProducts();

  for (let i = 1; i <= sparePartsTotal; i++) {
    const getResult = await api.getAllProductsLink(`spare_parts/?page=${i}`);
    const result = getResult.results;
    result.map((item) => {
      sparePartsProducts.push(item);
    });
  }

  const yandexSpareOffer = offer(
    sparePartsProducts.filter(
      (item: any) => item.image?.length && item.price > 0,
    ),
  );

  const yaTovariOffer = offer(
    allProducts.filter((item: any) => item.image?.length),
  );

  const feedOffer = offer(
    sparePartsProducts.filter((item: any) => item.image?.length),
  );

  const yandexSpareDoc = create(ymlCatalog(yandexSpareOffer));
  const yandexSpareXml = yandexSpareDoc.end({ prettyPrint: true });
  generateFile(yandexSpareXml, "yandex-spare");

  const yaTovariDoc = create(ymlCatalog(yaTovariOffer));
  const yaTovariXml = yaTovariDoc.end({ prettyPrint: true });
  generateFile(yaTovariXml, "yandex-tovari");

  const feedDoc = create(ymlCatalog(feedOffer));
  const feedXml = feedDoc.end({ prettyPrint: true });
  generateFile(feedXml, "feed");

  return `feed.xml, yandex-tovari.xml, yandex-spare.xml Сгенерированы: ${new Date().toISOString()}`;
}
