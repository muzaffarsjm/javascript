//menu icon creation and clickevent listener added
let menuIcon = document.querySelector('.js-menu');
menuIcon.addEventListener('click', ()=>{
  alert('We are working on this section');
});

//menu icon grabbing and event listener adding
let profileIcon  = document.querySelector('.js-profile-icon');
profileIcon.addEventListener('click', ()=>{
  //login page creator html
  let loginPage = `
    <div class = 'styles-login-page'>
      <button class = 'styles-closing-button js-login-closing-button'>
        X
      </button>
      <button class = 'login-button'>Login</button>
      <button class = 'signup-button'>Sign Up</button>
    </div>
  `;
  document.querySelector('.login-page-displayer').innerHTML = loginPage;

  let loginCloser = document.querySelector('.js-login-closing-button');
  loginCloser.addEventListener('click', ()=>{
    window.location.href = "blog.html"
  });
  loginCreator();
});

function loginCreator(){
  let loginButton = document.querySelector('.login-button');
  loginButton.addEventListener('click', ()=>{
    let loginElements = `
      <div class = 'styles-login-check'>
        <button class= 'styles-back-button js-back-button'>Back</button>
        <input type = 'text' placeholder = 'Username'></input>
        <input type = 'text' placeholder = 'Email'></input>
        <button class ='styles-login-account'>Login</button>
      </div>
    `;
    document.querySelector('.login-button-clicked').innerHTML = loginElements;

    let clickedBack = document.querySelector('.js-back-button');
    clickedBack.addEventListener('click', ()=>{
    console.log(5)
    window.location.href = "blog.html"
  });
  });
    
};





