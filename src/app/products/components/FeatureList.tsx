import Feature from "@/components/Feature";

const FeatureList = ({ brand }: { brand: string }) => {
  const component: any = [];

  component.push("Возврат НДС");
  component.push("Гарантия");

  switch (brand) {
    case "JUNGHEINRICH (269)":
    case "LINDE (400)":
    case "STILL (255)":
    case "HYSTER (001)":
    case "YALE (003)":
    case "BT (268)":
      component.push("OEM", "Распродажа");
      break;
    case "KALMAR (546)":
    case "MERLO (A24)":
    case "BOBCAT (274)":
    case "COMBILIFT (AY7)":
    case "CLARK (007)":
      component.push("Скидка за отзыв");
      break;
    case "HELI (U88)":
    case "HANGCHA Forklift (DG5)":
    case "EP (BB8)":
    case "JAC (IM5)":
      component.push("Оригинал");
      break;
  }

  return component.map((item: any, id: any) => (
    <Feature text={item} key={id} />
  ));
};

export default FeatureList;
