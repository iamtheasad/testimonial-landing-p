(function iamStrict() {
    "use strict"; // Javascript Strict Method

    $(document).ready(function () {

        /*Logo Slider*/
        $('.logo_carousel').slick({
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="arrow_prev_bg"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="arrow_next_bg"></span></button>',
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                }
            },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                }
            ]
        });


        /*Video Testimonial Slider*/
        $('.video_testimonial_wrapper').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            pauseOnHover: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="arrow_prev_bg"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="video_arrow_next"></span></button>',
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                }
            ]
        });


        /*Feedback Slider*/
        $('.feedback_wrapper').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            arrows: false,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });


        /*Magnific Popup*/
        $('.video_play_icon').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                },
            }
        });

        /*Client Slider*/
        $('.client_slider').slick({
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            pauseOnHover: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="client_arrow_prev"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="client_arrow_next"></span></button>',
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

    });
})();
 