function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let passMark = 0;
  let failMark = 0;
  for (const mark of marks) {
    if (mark >= 50) {
      passMark++;
    } 
     else {
      failMark++;
    }
  }
  return passMark > failMark;
}

const result = willSuccess("100 , 100");
console.log(result);
