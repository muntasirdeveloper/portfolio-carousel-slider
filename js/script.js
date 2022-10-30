$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 2,
            },
            991: {
                items: 3,
            },
        },
    });
});