window.onload = function () {
  var city = ymaps.geolocation;
  $('#city').html(ymaps.geolocation.city);
  if(city == 'Москва'){
    number.innerHTML = "8 800 200 06 00";
  }else{
    number.innerHTML = "+7 900 000 07 77";
  }
 }
