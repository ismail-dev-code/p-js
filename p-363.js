function makeSum(sumNum) {
  let sum = 0;
  for (let i = 0; i < sumNum.length; i++) {
    sum = sumNum[i] + sum;
  }
  return sum;
}

const result = makeSum([45, 54, 7, 8]);
console.log("total sum", result);
