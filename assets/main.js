console.log('hello Jacquie');

var cardStack = document.querySelector('.jl-home-image-cards');

function cardsHover() {
  cardStack.addEventlistener('mouseenter', function(){
    setTimeout(function(){
      cardStack.classList.add('wait');
    }, 2000);
  });

  cardStack.addEventlistener('mouseleave', function(){
    setTimeout(function(){
      cardStack.classList.remove('wait');
    }, 2000);
  });
}
