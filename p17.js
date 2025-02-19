const height = [65, 45, 88, 74, 87, 190, 66];
function getMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}
const result = getMax(height);
console.log("max number is:", result);
