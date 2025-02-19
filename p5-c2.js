function calculateSleepTime(times) {
    let totalSleepTime = 0;
    for (const second of times) {
      if (typeof second !== "number") {
        return "Invalid";
      }
      totalSleepTime+= second;
    }
    let hours = Math.floor(totalSleepTime / 3600);
    let minutes = Math.floor((totalSleepTime % 3600) / 60);
    let seconds = totalSleepTime % 60;
  
    return { hour: hours, minute: minutes, second: seconds };
  }
  const result = calculateSleepTime([100, 3800, "90" ]);
  console.log(result);
  