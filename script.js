let sec = 0;
let min = 0;
let hour = 0;
let intervel = null;

function startBtn() {
  let hours = document.querySelector("#hour");
  let minute = document.querySelector("#minute");
  let seconds = document.querySelector("#second");

//   let sec = 0;
  setInterval(function () {
    sec += 1;
    seconds.innerHTML = sec;
    if (sec === 60) {
      sec = 0;
    }
  }, 1000);

//   let min = 0;
  setInterval(function () {
    min += 1;
    minute.innerHTML = min;
    if (min == 60) {
      min = 0;
    }
  }, 60000);

//   let hour = 0;
  setInterval(function () {
    hour += 1;
    hours.innerHTML = hour;
    if (hour == 60) {
      hour = 0;
    }
  }, 3600000);
}

function stopInterval() {
   clearInterval(intervel);
   console.log("Stop button clicked");
   intervel = null;
}

function reset() {
  location.reload();
}
