function toCelcius(input){
  let result ;
  result = Number((input-32)*5/9);
  console.log(result)
  let displayElement = document.querySelector('.result-displayer');
  displayElement.innerHTML = result;
};

function toFaranheit(input){
  let result;
  result=Number((input*9/5)+32);
  let displayElement = document.querySelector('.result-displayer');
  displayElement.innerHTML = result;
};