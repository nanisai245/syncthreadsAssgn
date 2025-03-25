export const formatter = (price) => {
  const currentFormat = parseInt(price).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return currentFormat;
};
