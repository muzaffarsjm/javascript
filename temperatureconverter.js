
//code to display the result
let displayElement = document.querySelector('.result-displayer');
//acepts in faranheit and changes to  celcius
function toCelcius(){
  let userInput = document.querySelector('.temperature-input');
  let inputValue = userInput.value;
  let result = (inputValue - 32)*5/9;
  displayElement.innerHTML = Math.round(result);
}
//accepts in celcius and converts
function toFaranheit(){
  let userInput = document.querySelector('.temperature-input');
  let inputValue = userInput.value;
  let result = (inputValue *9/5)+32;
  displayElement.innerHTML = Math.round(result);
}





