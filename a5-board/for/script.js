const buttons = document.querySelectorAll(".btn");
const taskKomce = document.getElementById("task");
const taskBarce = document.getElementById("count");
const historyLog = document.getElementById("history");
const cardTitle = document.querySelectorAll(".card-title");
// console.log(object);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert("Board Updated Successfully");
    let taskK = parseInt(taskKomce.innerText);
    let taskB = parseInt(taskBarce.innerText);
    // console.log(typeof taskB, typeof taskK);
   

    if (taskK > 0 && taskB >= 23) {
      taskK -= 1;
      taskB += 1;
      taskKomce.innerText = taskK;
      taskBarce.innerText = taskB;
      buttons[i].disabled = true;
      const newHistory = document.createElement("div");
    if(taskK<=0){
      alert("Congratss! you have successfully completed the task")
    }
      newHistory.innerHTML = `
     <div class=" p-2 bg-green-100 m-2 text-center rounded-lg ">

  <h1>you have completed the task</h1>
  <h2 class ="text-bold">${cardTitle[i].innerText}</h2>
  <p> at ${getTime().hours}:${getTime().minutes}:${getTime().seconds} ${getTime().amPm}  </p>
</div>
     
`;

      historyLog.appendChild(newHistory);
    }
  });
}

function getTime() {
  const time = new Date();
  let hours = time.getHours(); 
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";

 
  hours = hours % 12 || 12;

  return {
    hours,
    minutes,
    seconds,
    amPm,
  };
}

