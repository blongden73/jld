console.log('hello Jacquie');

var cardStack = document.querySelector('.jl-home-image-cards');

function cardsHover() {
  console.log('init', 'cards');
  cardStack.addEventListener('mouseenter', function(){
    setTimeout(function(){
      cardStack.classList.add('wait');
    }, 800);
  });

  document.addEventListener('scroll', function(){
    setTimeout(function(){
      cardStack.classList.remove('wait');
    }, 2000);
  });
}

function init(){
  cardsHover();
}init();
