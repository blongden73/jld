console.log('hello Jacquie');

var cardStack = document.querySelector('.jl-home-image-cards');

function cardsHover() {
  if(cardStack) {
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

var sliderCheck = document.querySelector('.siema');

if(sliderCheck) {
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
}

function footerCarousel() {
  var buttons = document.querySelectorAll('.footer-control');
  var footerSlides = document.querySelectorAll('.carousel-slide');
  var footerImages = document.querySelectorAll('.footer-background-image img');
  footerSlides[0].classList.add('active');
  for(k=0; k<buttons.length; k++){
    buttons[k].addEventListener('click', function(){
      buttons.forEach((item, i) => {
        item.classList.remove('active');
      });
      footerImages.forEach((image, i) => {
        image.classList.remove('visible');
      });
      this.classList.add('active');
      var selector = this.dataset.control;
      var fullselector = '.footer-'+selector;
      var imageSelector = '.footer-background-image img.'+selector;
      var imageToChange = document.querySelector(imageSelector);
      var slide = document.querySelector(fullselector);
      for(i=0; i<footerSlides.length; i++){
        footerSlides[i].classList.remove('active');
      }
      slide.classList.add('active');
      imageToChange.classList.add('visible');
    });
  }
}footerCarousel();

function init(){
  cardsHover();
}init();
