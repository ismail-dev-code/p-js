const phones = [
  {
    name: "oppo",
    price: 12000,
    color: "black",
  },
  {
    name: "samsung",
    price: 28000,
    color: "black",
  },
  {
    name: "iphone",
    price: 120000,
    color: "black",
  },
];

function cheapPhone(mobiles) {
  let cheapOne = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price < cheapOne.price) {
      cheapOne = mobile;
    }
  }
  return cheapOne;
}
const cheapMobile = cheapPhone(phones);
console.log(cheapMobile);
