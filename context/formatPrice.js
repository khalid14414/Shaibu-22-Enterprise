export const formatPrice = (amount) =>
  amount.toLocaleString("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  });
