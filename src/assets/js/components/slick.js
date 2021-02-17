var home = $("#home");

home.slick({
//  arrows: false,
//  dots: true,
//  infinite: false,
//  speed: 500,
//  fade: true,
//  cssEase: 'linear',
//  slidesToShow: 1,
//  slidesToScroll: 1
});

//    arrows: false,
//    dots: true,
//    speed: 800,


$("#home-arrow-prev").on("click", function(event) {
    event.preventDefault();

    home.slick('slickPrev');
});

$("#home-arrow-next").on("click", function(event) {
    event.preventDefault();

    home.slick('slickNext');
});

