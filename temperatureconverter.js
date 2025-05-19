function toCelcius(input){
  let result;
  result = (input-32)*5/9;
  let displayElement = document.querySelector('.result-displayer');
  displayElement.innerHTML = result;
};

function toFaranheit(input){
  let result;
  result (input*9/5)+32;
};