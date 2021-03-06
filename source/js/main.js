'use strict'

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
}

function scrollTo(c, e, d) {
  d || (d = easeOutCuaic);
  var a = document.documentElement;
  if (0 === a.scrollTop) {
    var b = a.scrollTop;
    ++a.scrollTop;
    a = b + 1 === a.scrollTop-- ? a : document.body
  }
  b = a.scrollTop;
  0 >= e || ("object" === typeof b && (b = b.offsetTop),
  "object" === typeof c && (c = c.offsetTop),
    function (a, b, c, f, d, e, h) {
      function g() {
        0 > f || 1 < f || 0 >= d ? a.scrollTop = c : (a.scrollTop = b - (b - c) * h(f),
          f += d * e, setTimeout(g, e))
      }
      g()
    }(a, b, c, 0, 1 / e, 20, d))
};

let anchorLinks = document.querySelectorAll('.scroll');
if (anchorLinks.length) {
  anchorLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.querySelector(item.getAttribute('href')),
        topPos = el.getBoundingClientRect().top + window.pageYOffset;

      scrollTo(topPos, 500)
    })
  })
}





const HISTORYSLIDERS = document.querySelectorAll('.history__slider')
HISTORYSLIDERS.forEach(function (item){
  var swiper = new Swiper(item.querySelector('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 13,
    centeredSlides: true,
    loop: true,
  });
})


const VIDEOSLIDERCONTAINER = document.querySelector('.video-slider')
let videoSlider = new Swiper(VIDEOSLIDERCONTAINER.querySelector('.swiper-container'), {
  slidesPerView: 'auto',
  spaceBetween: 13,
  centeredSlides: true,
  loop: true,
});

const EXPERTSSLIDERCONTAINER = document.querySelector('.experts__slider')
let expertsSlider = new Swiper(EXPERTSSLIDERCONTAINER.querySelector('.swiper-container'), {
  slidesPerView: 'auto',
  spaceBetween: 13,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const NAVBUTTONS =  document.querySelectorAll('.nav-toggle')

NAVBUTTONS.forEach(function (item){
  item.addEventListener('click', function (evt){
    evt.preventDefault()
    document.querySelector('.main-nav').classList.toggle('main-nav--open')
  })
})


const PHONEINPUTS =document.querySelectorAll(".phone-mask")
PHONEINPUTS.forEach(function (item){
  VMasker(item).maskPattern("999-999-99-99");
})
