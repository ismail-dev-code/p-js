function calculateVAT(price) {
  if (price < 0 || typeof price !== "number") {
    return "Invalid";
  }
  let vat = 7.5;
  let vatTotal = (price * vat) / 100;
  return vatTotal;
}

const result = calculateVAT("foo");
console.log(result);
