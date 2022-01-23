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

// To control a number of slider per page
// You can use number or object

// Use number if you want a same layout for all viewports
// If you want a controll number dependable of viewport
// Use object notation as on example below


// If the window is wider than 768px
// Show 2 slider per page

// If the window is wider than 1024px
// Show 3 slider per page

// Otherwise show 1 slide per page

const mySiema = new Siema({
  perPage: {
    768: 2,
    1024: 3,
  },
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());


function init(){
  cardsHover();
}init();
