export const metaGen = (
  title?: string,
  description?: string,
  img?: string,
  type?: string,
) => {
  return {
    title: title
      ? title
      : "Запчасти для погрузчиков от лучших мировых производителей и поставщиков",
    description: description
      ? description
      : "Купить запчасти для вилочных погрузчиков бренда LOADERPRO в компании СПЕЦМАШИНА - это выбор людей которые ценят высокий уровень сервиса и внимание к мелочам. Работая на рынке с 2017 года мы развиваем продукт с высокими стандартами качества, которые предъявляем для всех участников нашей деятельности.",
    openGraph: {
      type: type ? type : "website",
      title: title,
      description: description,
      images: img ? img : [`${process.env.NEXT_PUBLIC_HOST}/images/share.jpg`],
      url: "./",
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST}`),
    robots: "all",
    alternates: {
      canonical: "./",
    },
  };
};
