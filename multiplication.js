function totalItem(fish, carrot, cucumber) {
  const perKgFish = 300;
  const perKgCarrot = 80;
  const perKgCucumber = 90;
  const totalPriceFish = perKgFish * fish;
  const totalPriceCarrot = perKgCarrot * carrot;
  const totalPriceCucumber = perKgCucumber * cucumber;
  const allItemsPrice = totalPriceFish + totalPriceCarrot + totalPriceCucumber;
  return allItemsPrice;
}
const result = totalItem(2, 3, 4);
console.log("total all items price:", result);
