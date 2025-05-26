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
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  `;
  document.querySelector('.login-page-displayer').innerHTML = loginPage;
});