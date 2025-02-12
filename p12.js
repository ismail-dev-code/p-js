// let sum = 0;
// let numbers = [75.25, 65, 80, 35.45, 99.5];
// for (let num of numbers) {
  // console.log(num);
//   sum = sum + num;
// }
// let avg = sum / numbers.length;
// console.log(avg.toFixed(2));
// let sum = 0;
// let numbers = [3, 2, 4, 4, 5, 2, 4];
// for(let num of numbers){
//     sum = num + sum;
// }
// console.log(sum);

let sum = 0;
let numbers = [75.25, 65, 80, 35.45, 99.5];
for(let num of numbers){
    sum = num + sum;
    // console.log(sum);
}
let avg = sum/numbers.length;

console.log(parseFloat(avg.toFixed(2)));