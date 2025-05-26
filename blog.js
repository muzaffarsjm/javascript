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
  alert('clciked');
});
});

