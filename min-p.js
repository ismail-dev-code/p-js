const prices = [23000, 30000, 36000, 8000, 18000];
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log(cheap);
