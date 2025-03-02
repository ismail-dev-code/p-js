const todayDate = document.getElementById("coto-date");
const currentDate = new Date();
todayDate.innerText = currentDate.toDateString();

const btns = document.querySelectorAll(".btn");
const cardTitle = document.querySelectorAll(".card-title");
const historyLog = document.getElementById("history");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const taskKombe = document.getElementById("task");
    const taskBarbe = document.getElementById("count");

    if (parseInt(taskKombe.innerText) <= 0) {
      alert("No tasks remaining!");
    } else {
      alert("Board Updated Successfully!");
      if (parseInt(taskKombe.innerText) <= 1) {
        alert("Congrats!! you have successfully completed the current task");
      }
      taskKombe.innerText = parseInt(taskKombe.innerText) - 1;
      taskBarbe.innerText = parseInt(taskBarbe.innerText) + 1;

      btns[i].disabled = true;
      btns[i].classList.add(
        "bg-gray-400",
        "font-medium",
        "text-white",
        "rounded-xl",
        "py-1.5",
        "px-4",
        "text-[16px]",
        "cursor-not-allowed"
      );
      btns[i].classList.remove("btn");
    }

    const newElement = document.createElement("div");
    historyLog.appendChild(newElement);

    newElement.innerHTML = `
    <div class="bg-slate-100 p-3 mb-7 rounded-xl"> 
        <p> You have completed the task ${
          cardTitle[i].innerText
        } at ${format12HourTime()} </p>
    </div>
`});
document.getElementById("clear-btn").addEventListener("click", function () {
    historyLog.innerText = "";
  });


    function format12HourTime() {
      const nowTime = new Date();
      let hours = nowTime.getHours();
      let minutes = nowTime.getMinutes();
      let seconds = nowTime.getSeconds();
      const amPm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      return `${hours}:${minutes}:${seconds} ${amPm}`;
    }
    
  };

const colors = ["indigo", "#33FF57", "yellow", "pink", "#3357FF"];

document.getElementById("changeBg").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
});
