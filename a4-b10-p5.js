function calculateTax(income, expense) {
  if (
    typeof income !== "number" ||
    income < 0 ||
    typeof expense !== "number" ||
    expense < 0
  ) {
    return "Invalid Input";
  }
  const diff = income - expense;
  const disc = diff * 0.2;
  return disc;
}
const totalCost = calculateTax(6000, -1500);
console.log(totalCost);
