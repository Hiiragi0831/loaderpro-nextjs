// описываем правила: если бренд совпал с одной из строк в keys, вернуть соответствующий набор фич
const brandFeatureRules: Array<{ keys: string[]; features: string[] }> = [
  {
    keys: [
      "JUNGHEINRICH (269)",
      "LINDE (400)",
      "STILL (255)",
      "HYSTER (001)",
      "YALE (003)",
      "BT (268)",
    ],
    features: ["OEM"],
  },
  // {
  //   keys: [
  //     "KALMAR (546)",
  //     "MERLO (A24)",
  //     "BOBCAT (274)",
  //     "COMBILIFT (AY7)",
  //     "CLARK (007)",
  //   ],
  //   features: ["Скидка за отзыв"],
  // },
  {
    keys: ["HELI (U88)", "HANGCHA Forklift (DG5)", "EP (BB8)", "JAC (IM5)"],
    features: ["Оригинал"],
  },
];

/**
 * Возвращает массив строк с фичами для переданного бренда
 */
export function getBrandFeatures(brand: string): string[] {
  for (const rule of brandFeatureRules) {
    if (rule.keys.includes(brand)) {
      return rule.features;
    }
  }
  return [];
}
