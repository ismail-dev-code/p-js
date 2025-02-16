function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let containDigit = false;
  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    if (!isNaN(char) && char !== " ") {
      containDigit = true;
      break;
    }
  }
  return containDigit;
}
let result = checkDigitsInName("Ismail123");
console.log(result);
