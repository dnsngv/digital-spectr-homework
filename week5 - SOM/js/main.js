import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

//dropdown currency
$(function() { // Dropdown toggle
    $('.currency-button').click(function() { $(this).next('.small-dropdown').slideToggle();
    });
    
    $(document).click(function(e) 
    { 
    var target = e.target; 
    if (!$(target).is('.currency-button') && !$(target).parents().is('.currency-button')) 
    //{ $('.dropdown').hide(); }
      { $('.small-dropdown').slideUp(); }
    });
});

//dropdown profile
$(function() { // Dropdown toggle
    $('.profile_img').click(function() { $(this).next('.big-dropdown').slideToggle();
    });
    
    $(document).click(function(e) 
    { 
    var target = e.target; 
    if (!$(target).is('.profile_img') && !$(target).parents().is('.profile_img')) 
    //{ $('.dropdown').hide(); }
      { $('.big-dropdown').slideUp(); }
    });
});
/*
var swiper = new Swiper(".swiper-wrapper", {
  prevButton: '.slider_nav.prev',
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
*/


$(window).on('load', function(){
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4.4,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    runCallbacksOnInit: false,
    speed: 800,
    navigation: {
      nextEl: '.swiper-name-next__next',
    },
  });

  var nb_slides = swiper.params.slidesPerView;
  swiper.slideTo(Math.floor(nb_slides / 2));
  
  /*
  $('.swiper-wrapper').on('click', function(e){
    e.preventDefault();
    console.log($(this).index());
    swiper.slideTo($(this).index());
    return false;
  });
  */
});