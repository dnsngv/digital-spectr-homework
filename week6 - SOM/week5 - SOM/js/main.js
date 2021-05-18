import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

//dropdown currency
$(function() { 
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
$(function() { 
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



//Swiper slideshow 1
$(window).on('load', function(){
  var swiper = new Swiper(".product", {
    slidesPerView: 4.4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      800: {
        slidesPerView: 4.4,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4.4,
        spaceBetween: 30
      }
    },
    centeredSlides: false,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-name-next__next',
    },
  });

  var nb_slides = swiper.params.slidesPerView;
  swiper.slideTo(Math.floor(nb_slides / 2));
});


//Swiper slideshow 2
$(window).on('load', function(){
  var swiperReviews = new Swiper(".reviews", {
    slidesPerView: 3.1,
    initialSlide: 10,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    speed: 800,
    width: 1100,
    navigation: {
      nextEl: '.swiper-name-next__next',
    },
  });

  var nb_slides = swiperReviews.params.slidesPerView;
  swiperReviews.slideTo(Math.floor(nb_slides / 2));
});