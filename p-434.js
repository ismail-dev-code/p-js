const numbers = [2, 43, 24, 45, 44, 57, 99, 54, 47];
function takeEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

const result = takeEvenNumbers(numbers);
console.log("your even number are:", result);
