const FormatPrice = ({ priceABC }) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(priceABC / 100);
};

export default FormatPrice;
