export const getProductStatus = (id: number): string => {
  switch (id) {
    case 1:
      return "В наличии";
    case 2:
      return "2-3 недели";
    default:
      return "Нет в наличии";
  }
};

export const getProductStatusColor = (id: number): string => {
  switch (id) {
    case 1:
      return "green";
    case 2:
      return "orange";
    default:
      return "red";
  }
};
