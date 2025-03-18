import Feature from "@/components/Feature";
import { SingleProduct } from "@/common/types/Product";

const FeatureList = ({ data }: { data: SingleProduct }) => {
  const component: any = [];

  component.push("Возврат НДС");
  component.push("Гарантия");

  switch (data.brand) {
    case "JUNGHEINRICH (269)" ||
      "LINDE (400)" ||
      "STILL (255)" ||
      "HYSTER (001)" ||
      "YALE (003)" ||
      "BT (268)":
      component.push("OEM");
      component.push("Распродажа");
      break;
    case "KALMAR (546)" ||
      "MERLO (A24)" ||
      "BOBCAT (274)" ||
      "COMBILIFT (AY7)" ||
      "CLARK (007)":
      component.push("Скидка за отзыв");
      break;
    case "HELI (U88)" || "HANGCHA Forklift (DG5)" || "EP (BB8)" || "JAC (IM5)":
      component.push("Оригинал");
      break;
  }

  return component.map((item: any, id: any) => (
    <Feature text={item} key={id} />
  ));
};

export default FeatureList;
