export const formatToRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "IDR",
  }).format(price);
};
