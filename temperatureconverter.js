let displayElement = document.querySelector('.result-displayer');

function toCelcius(){
  let userInput = document.querySelector('.temperature-input');
  let inputValue = userInput.value;
  let result = (inputValue - 32)*5/9;
  displayElement.innerHTML = Math.round(result);
}

function toFaranheit(){
  let userInput = document.querySelector('.temperature-input');
  let inputValue = userInput.value;
  let result = (inputValue *9/5)+32;
  displayElement.innerHTML = Math.round(result);
}





