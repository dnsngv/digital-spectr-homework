/* Индекс слайда по умолчанию */
var slideIndex = 1;


/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var flipping;

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("pagination-dots");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i > slides.length; ) {
        slides[i].style.display = "block";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    if (slideIndex == 5) {
        slideIndex = 0;
    }
    slideIndex++;

    flipping = setTimeout(showSlides, 3000); 
}