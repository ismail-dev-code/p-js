function calculateTax(income, expense) {
  if (
    typeof income !== "number" ||
    income < 0 ||
    typeof expense !== "number" ||
    expense < 0
  ) {
    return "Invalid Input";
  }
  let texableAmount = income - expense;
  let tax = texableAmount * 0.2;
  return tax;
}
const result = calculateTax(10000, 3000);
console.log(result);
