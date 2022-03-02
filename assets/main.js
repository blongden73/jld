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
      920: 2,
      1400: 3
    },
  });
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  prev.addEventListener('click', () => mySiema.prev());
  next.addEventListener('click', () => mySiema.next());
}

function header() {
  var header = document.querySelector('header');
  var headerTracking = document.querySelector('.header-tracker');
  var videos = document.querySelectorAll('video');
  document.addEventListener('scroll', function(){
    for(i=0; i<videos.length; i++) {
      var videoTop = videos[i].getBoundingClientRect().top;
      var windowHeight = window.innerHeight / 2;
      if(videoTop <= windowHeight && videoTop >= -10) {
        videos[i].play();
      }else {
        videos[i].pause();
      }
    }
    var top = headerTracking.getBoundingClientRect().top;
    console.log(top);
    if(top <= -10) {
      header.classList.add('scrolling');
    }else {
      header.classList.remove('scrolling');
    }
  });
}

function videoPLay(){
  var videoCheck = document.querySelector('video');
  if(videoCheck){
    console.log('Hay videos aca');
    var videos = document.querySelectorAll('video');
    document.addEventListener('scroll', function(){
      videos.forEach((item, i) => {
        var position = videos.getBoundinClientRect();
        console.log(position);
      });
    });
  }
  //play videos only when they are in the page
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

//todo click on the arrows when you cant go anywhere
//add a three up column

function init(){
  cardsHover();
  header();
  // videoPLay();
}init();


//// TODO:
// carousel
// add text above carousel on homepage
// arrows carousels
// project page text
// first para and a read more
// instagram
