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

$(function(){
  $('.menu__item a').hover(
    function() {
    $('.menu-dropdown').css('display', 'block');
  }, 
    function() {
    $('.menu-dropdown').css('display', 'none');
  }
)});


//dropdown menu
$(function(){
  $('.menu__item#menu li').hover(function(){
      //$('#drop' , this).css('display','block');
       $(this).children('ul').delay(20).slideDown(200);
  }, function(){
       $(this).children('ul').delay(20).slideUp(200);
  });
});