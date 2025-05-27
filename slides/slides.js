const quotesArray = [
  {
    name: 'Abdulla Avloniy',
    photo: 'authorpics/avloniy.png',
    text: 'Tarbiya biz uchun yo hayot-yo mamot, yo najot-yo halokat, yo saodat-yo falokat masalasidir'
  },
  {
    name: 'Hamza Hakimzoda Niyoziy',
    photo: 'authorpics/hamza.png',
    text: 'Olamning xurshiidi kundir, odamning xurshidi ilm, Olamnning zulmoti tundir, odamning nodori ilm.'
  },
  {
    name: "Cho'lpon",
    photo:  'authorpics/cholpon.png',
    text: "Tiriksan, o‘lmagansan, Sen-da odam, sen-da insonsen, Kishan kiyma, bo`yin egma, Ki, sen ham hur tug‘ilg‘ansan"
  }
];

const imgElement = document.querySelector('.photo-author');

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
  }, 2500);
};
