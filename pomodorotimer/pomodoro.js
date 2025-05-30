const count = document.querySelector('.time-displayer');

const startElement = document.querySelector('.start-button');
const stopElement = document.querySelector('.stop-button');
const resetElement = document.querySelector('.reset-button');

let timeInterval;
//60*25=1500
let timeLeft = 1500;
