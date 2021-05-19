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
  $('.menu__item.2').click(
    function() {
    $('.menu-dropdown').css('display', 'block');
  });

  $(document).click(function(e) 
    { 
    var target = e.target; 
    if (!$(target).is('.menu__item.2') && !$(target).parents().is('.menu__item.2')) 
    //{ $('.dropdown').hide(); }
      { $('.menu-dropdown').css('display', 'none'); }
    });
});


//dropdown menu
$(function(){
  $('.menu-dropdown__item li').hover(function(){
      //$('#drop' , this).css('display','block');
       $(this).children('ul').css('display', 'block');
  }, function(){
       $(this).children('ul').css('display', 'none');
  });
});