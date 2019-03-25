$(document).ready(function () {

 $('.nice-select').niceSelect();
$(' .heart ').on('click', function () {
    $(this).toggleClass('red');
});

// $(' .star ').on('click', function () {
//     $(this).toggleClass('path');
// });




$('.s-item').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });


var menu = $('.sina-nav');
// if (menu.hasClass('')) {
//     console.log("ddd");
// }
if (menu.hasClass("navbar-freez")) {
     $("header").animate({
      height: 62 + "px"
    });

}
else{
    $("header").animate({
        height: 62 + "px"
      });
}
});
window.addEventListener('load', function (e) {
    var svg =  $('.price span .fa-star') ;
    console.log(svg);
    
    $('.price span .fa-star:nth-child(1)').on('click', function () {
        $('.price span .fa-star:nth-child(1)').attr("data-prefix","fas").css("color","green");
      
    });
    $('.price span .fa-star:nth-child(2)').on('click', function () {
        $('.price span .fa-star:nth-child(1)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(2)').attr("data-prefix","fas").css("color","green");
    });
    
    $('.price span .fa-star:nth-child(3)').on('click', function () {
        $('.price span .fa-star:nth-child(1)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(2)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(3)').attr("data-prefix","fas").css("color","green");
    });
    $('.price span .fa-star:nth-child(4)').on('click', function () {
        $('.price span .fa-star:nth-child(1)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(2)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(3)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(4)').attr("data-prefix","fas").css("color","green");
    });
    
    $('.price span .fa-star:nth-child(5)').on('click', function () {
        $('.price span .fa-star:nth-child(1)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(2)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(3)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(4)').attr("data-prefix","fas").css("color","green");
        $('.price span .fa-star:nth-child(5)').attr("data-prefix","fas").css("color","green");
    });
    
    
});