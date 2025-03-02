// const btnPrimary = document.querySelectorAll(".btn-primary");
// for(let i = 0; i<btnPrimary.length; i++){

// }

document.getElementById("complete-btn").addEventListener("click", function () {
  const taskAssigned = document.getElementById("task-assign");
  const taskCompleted = document.getElementById("task-complete");

  let taskAssignedElement = parseInt(taskAssigned.innerText);
  let taskCompletedElement = parseInt(taskCompleted.innerText);

  if (taskAssignedElement > 0) {
    taskAssignedElement -= 1;
    taskCompletedElement += 1;
  }
  taskAssigned.innerText = taskAssignedElement;
  taskCompleted.innerText = taskCompletedElement;
 
});

const newElement = document.createElement("div");

    newElement.innerHTML = `
    <div class="bg-slate-100 p-3 mb-7 rounded-xl"> 
        <p> You have completed the task ${
          cardTitle[i].innerText
        } at ${format12HourTime()} </p>
    </div>
`;

    function format12HourTime() {
      const nowTime = new Date();
      let hours = nowTime.getHours();
      let minutes = nowTime.getMinutes();
      let seconds = nowTime.getSeconds();
      const amPm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    historyLog.appendChild(newElement);
