const count = document.querySelector('.time-displayer');

const startElement = document.querySelector('.start-button');
const stopElement = document.querySelector('.stop-button');
const resetElement = document.querySelector('.reset-button');

let timeInterval;
//60*25=1500
let timeLeft = 1500;

function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${
    minutes.toString().padStart(2, '0')
  }:
  ${
    seconds.toString().padStart(2, '0')
  }
  `;

  count.innerHTML = formatedTime;
}