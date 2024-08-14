export const getPriceFormat = (price) => {
  return (price || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
