let sum = 0;
let numbers = [75.25, 65, 80, 35.45, 99.5];
for (let num of numbers) {
  sum += num;
}
let avg = sum / numbers.length;
console.log(parseFloat(avg.toFixed(2)));

let givenNum = 119;
let result = givenNum % 5;
console.log(result);
