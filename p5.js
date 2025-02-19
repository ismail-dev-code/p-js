let price = "$249";
let sum = 0;
for (let i = 0; i < price.length; i++) {
  if (!isNaN(price[i]) && (price[i] !== " ")) {
    sum = parseInt(price[i]) + sum;
  }
}
console.log(sum);