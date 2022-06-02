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
var sliderCheckProject = document.querySelector('.siema-project');

if(sliderCheckProject) {
  var slides = 2;
} else {
  var slides = 3;
}


if(sliderCheck) {
  const mySiema = new Siema({
    loop: true,
    perPage: {
      920: 2,
      1400: slides
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
      if(videoTop <= windowHeight && videoTop >= -300) {
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

function slowdownman() {
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 40; //controls the scroll wheel range/speed
    else if (event.detail) delta = -event.detail / 40;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
var animationInterval = 500; //controls the scroll animation after scroll is done
  var scrollSpeed = 500; //controls the scroll animation after scroll is done

if (end == null) {
  end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 ||
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 ||
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}
}

function hamburger(){
  var ham = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');

  ham.addEventListener('click', function(){
    this.classList.toggle('open');
    menu.classList.toggle('open');
  })
}


function init(){
  cardsHover();
  header();
  hamburger();
  // videoPLay();
}init();


//// TODO:
// carousel projects
// instagram
