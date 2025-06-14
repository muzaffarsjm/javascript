const count = document.querySelector('.time-displayer');

const startElement = document.querySelector('.start-button');
const stopElement = document.querySelector('.stop-button');
const resetElement = document.querySelector('.reset-button');

let timeInterval;
//60*25=1500
let timeLeft = 1500;

//visual timer format updater function
function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${
    minutes.toString().padStart(2, '0')
  } :
  ${
    seconds.toString().padStart(2, '0')
  }
  `;

  count.innerHTML = formatedTime;
};

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    //checkin time
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
//reset button function
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);