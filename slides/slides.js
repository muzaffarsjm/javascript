const quotesArray = [
  {
    name: 'Abdulla Avloniy',
    photo: 'authorpics/avloniy.png',
    text: 'Tarbiya biz uchun yo hayot-yo mamot, yo najot-yoo halokat, yo saodat-yo falokat masalasidir'
  },
  {
    name: 'Hamza Hakimzoda Niyoziy',
    photo: 'authorpics/hamza.png',
    text: 'Olamning xurshiidi kundir, odamning xurshidi ilm, Olamnning zulmoti tundir, odamning nodori ilm.'
  }
];

const imgElement = document.querySelector('.img');

const textElement = document.querySelector('.js-text');

const authorElement = document.querySelector('.author-name');

let index = 0;

updateQuote();

function updateQuote(){
  const { name, photo, text } = quotesArray[index];
  imgElement.src = photo;
  textElement.innerHTML = text;
  authorElement.innerHTML = name;
  index++;
  if(index === quotesArray.length){
    index = 0;
  };
  setTimeout(()=>{
    updateQuote();
  }, 1000);
};
