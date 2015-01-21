$(document).ready(function($) {
    "use strict";

    // Nav Scroll
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Prettyphoto
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Custom Tab styles
    $(".i-div").on('click', function() {
        $(".t-img1").css("opacity", "1");
        $(".t-img1").addClass("animated fadeInRight");
        $('.t-img2, .t-img3').css('opacity', '0');
        $('.t-img2, .t-img3').removeClass("animated fadeInRight");
    });

    $(".a-div").on('click', function() {
        $(".t-img2").css("opacity", "1");
        $(".t-img2").addClass("animated fadeInRight");
        $('.t-img1, .t-img3').css('opacity', '0');
        $('.t-img1, .t-img3').removeClass("animated fadeInRight");
    });

    $(".w-div").on('click', function() {
        $(".t-img3").css("opacity", "1");
        $(".t-img3").addClass("animated fadeInRight");
        $('.t-img1, .t-img2').css('opacity', '0');
        $('.t-img1, .t-img2').removeClass("animated fadeInRight");
    });

    // Stats 
    $('#stats ').appear(function() {
        $('.stat1').animateNumber({ number: 356 }, 1200);
        $('.stat2').animateNumber({ number: 287 }, 1200);
        $('.stat3').animateNumber({ number: 112 }, 1150);
        $('.stat4').animateNumber({ number: 1645 }, 1300);
    }, {
        accX: 0,
        accY: -200
    });

    // Parallax 
    $.stellar({
        horizontalOffset: 50
    });

    // Skills - Skill1 
    $('#skills').appear(function() {
        $('#skill1').circleProgress({
            value: 0.85,
            size: 180,
            thickness: '10',
            fill: {
                color: ["#55acee"]
            },
            animation: {
                duration: 1200,
                easing: 'circleProgressEasing'
            }
        });

        var percent_number_step = $.animateNumber.numberStepFactories.append('%')
        $('.skill1').animateNumber({
            number: 90,
            numberStep: percent_number_step
        }, 1200);

    }, {
        accX: 0,
        accY: -240
    });

    // Skills - Skill2
    $('#skills').appear(function() {
        $('#skill2').circleProgress({
            value: 0.50,
            size: 180,
            thickness: '10',
            fill: {
                color: ["#55acee"]
            },
            animation: {
                duration: 1200,
                easing: 'circleProgressEasing'
            }
        });

        var percent_number_step = $.animateNumber.numberStepFactories.append('%')
        $('.skill2').animateNumber({
            number: 50,
            numberStep: percent_number_step
        }, 1200);

    }, {
        accX: 0,
        accY: -240
    });

    // Skills - Skill3
    $('#skills').appear(function() {
        $('#skill3').circleProgress({
            value: 0.75,
            size: 180,
            thickness: '10',
            fill: {
                color: ["#55acee"]
            },
            animation: {
                duration: 1200,
                easing: 'circleProgressEasing'
            }
        });
        var percent_number_step = $.animateNumber.numberStepFactories.append('%')
        $('.skill3').animateNumber({
            number: 75,
            numberStep: percent_number_step
        }, 1200);

    }, {
        accX: 0,
        accY: -240
    });

    // Skills - Skill4
    $('#skills').appear(function() {
        $('#skill4').circleProgress({
            value: 0.60,
            size: 180,
            thickness: '10',
            fill: {
                color: ["#55acee"]
            },
            animation: {
                duration: 1200,
                easing: 'circleProgressEasing'
            }
        });
        var percent_number_step = $.animateNumber.numberStepFactories.append('%')
        $('.skill4').animateNumber({
            number: 60,
            numberStep: percent_number_step
        }, 1200);

    }, {
        accX: 0,
        accY: -240
    });

    // Quote Slider
    $("#quote-slider").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Team Slider
    var owl = $("#team-slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false
    });

    // Client Slider
    var owl = $("#clients-slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 3],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        navigation: true,
        pagination: false
    });
});

// Scrollspy
$('body').scrollspy({
    target: '.navbar-default'
})

// Responsive Menu Close
$('.navbar-collapse ul li a').on('click', function() {
    $('.navbar-toggle:visible').click();
});

$(window).load(function() {
    "use strict";

    /* Loading Script */
    $('#loader').fadeOut("slow");

    // Sticky Header
    $(".nav-header-custom").sticky({
        topSpacing: 0
    });

    // Isotope
    var $container = $('#folio');
    $container.isotope({
        itemSelector: '.folio-item'
    });
    var $optionSets = $('#portfolio .folio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

// Onscroll Menu
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 350)
        $(".nav-animate").css("margin-top", "0px");
    else
        $(".nav-animate").css("margin-top", "-100px");
});

// Google Map
$(function() {
    var map = new GMaps({
        el: "#map",
        lat: 40.714353,
        lng: -74.005973,
        zoom: 16,
        zoomControl: false,
        scrollwheel: false,
        controls: false,
        zoomControlOpt: {
            position: "TOP_LEFT"
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        styles: [{
            "featureType": "road",
            "elementType": "labels",
            "styles": [{
                "visibility": "simplified"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#a1cdfc"
            }, {
                "saturation": 30
            }, {
                "lightness": 49
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#f49935"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#fad959"
            }]
        }]
    });

    map.addMarker({
        lat: 40.714353,
        lng: -74.005973,
        icon: "images/marker.png"
    });
});

if (document.body.clientWidth >= 768) {

    $(document).ready(function($) {
        // Animations 
        "use strict";
        $('#about2').appear(function() {
            $(".tab-side").addClass("animated fadeInLeft");
            $(".t-img1").addClass("animated fadeInRight");
        }, {
            accX: 0,
            accY: -350
        });

        $('.f-project-img').appear(function() {
            $(".project-info").addClass("animated fadeInLeft");
        }, {
            accX: 0,
            accY: -200
        });

        $('#info-wrap').appear(function() {
            $(".big-img").addClass("animated fadeInLeft");
            $(".info-wrap").addClass("animated fadeInRight");
        }, {
            accX: 0,
            accY: -350
        });

    });

}

/* Animation */
$('[data-animated]').each(function() {
    $(this).addClass('animated-out');
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    $('.animated-out[data-animated]').each(function() {
        var $this = $(this);
        if (scroll + height >= $this.offset().top) {
            var delay = parseInt($this.attr('data-animated'));
            if (isNaN(delay) || 0 === delay) {
                $this.removeClass('animated-out').addClass('animated-in');
            } else {
                setTimeout(function() {
                    $this.removeClass('animated-out').addClass('animated-in');
                }, delay);
            }
        }
    });
});