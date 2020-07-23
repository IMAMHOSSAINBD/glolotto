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


});



//-- WOW JS intialize/
new WOW().init();

//        $('.marquee').marquee();
// marquee
$(function () {
    $('.marquee').marquee({
        duration: 9000
    });
});

// Back to top JS -->
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    $('#back-to-top').tooltip('show');

});

// Chatbot hide JS -->
function hideFunction() {
    var x = document.getElementById("chatbot");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

// register choose
function show(aval) {
    if (aval == "0") { //if 1 then show it

        thailandContend.style.display = 'block';
        Form.fileURL.focus();
    } else { //for everything else hide it

        thailandContend.style.display = 'none';
    }
};


// Chatbot hide JS -->
function hideFunction() {
    var x = document.getElementById("chatbot");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
