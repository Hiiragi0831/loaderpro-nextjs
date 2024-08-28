export const getProductStatus = (name: string): string => {
  switch (name) {
    case "В наличии":
      return "В наличии";
    case "Нет в наличии":
      return "Нет в наличии";
    default:
      return "По запросу";
  }
};

export const getProductStatusColor = (name: string): string => {
  switch (name) {
    case "В наличии":
      return "green";
    case "Нет в наличии":
      return "red";
    default:
      return "orange";
  }
};
