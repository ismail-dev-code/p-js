const products = [
  {
    name: "orange",
    price: 170,
    quantity: 1,
  },
  {
    name: "carrot",
    price: 60,
    quantity: 2,
  },
  {
    name: "potato",
    price: 90,
    quantity: 2,
  },
];
function productsQuantity(products) {
  let total = 0;
  for (const product of products) {
    total = product.price * product.quantity;
  }

  return total;
}
const totalQuantity = productsQuantity(products);
console.log("total", totalQuantity);
