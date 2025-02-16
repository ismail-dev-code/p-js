// function calculateFinalScore(input) {
//   let finalScore = input.testScore + input.schoolGrade;
//   if (input.isFFamily === true) {
//     finalScore += 20;
//   }
// }

// calculateFinalScore({
//   name: "Faisal",
//   testScore: 45,
//   schoolGrade: 25,
//   isFFamily: false,
// });

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

const result = checkDigitsInName("Ismail123");
console.log(result);
