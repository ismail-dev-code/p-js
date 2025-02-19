let price = "$249";
let chars = price.split("");
let sum = 0;
for (let i = 0; i < chars.length; i++) {
  let element = chars[i];
  if (!isNaN(element) && element !== " ") {
    sum = parseInt(element) + sum;
  }
}
console.log(sum);
