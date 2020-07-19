$(document).ready(function () {
    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $('#sd').click(function () {
        $('#sidebarl').removeClass('closed');
        $('#sidebarl').addClass('opened');
    });
    $('#cl').click(function () {
        $('#sidebarl').removeClass('opened');
        $('#sidebarl').addClass('closed');
    });


})
