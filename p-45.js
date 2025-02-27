const numbers = [2, 43, 24, 45, 44, 57,99, 54, 47];
function makeOddNum(oddNums) {
  let oddNumbers = [];
  for (let i = 0; i < oddNums.length; i++) {
    if (oddNums[i] % 2 === 1) {
      oddNumbers.push(oddNums[i]);
    }
}
return oddNumbers;
}
const result = makeOddNum(numbers);
console.log(result);


