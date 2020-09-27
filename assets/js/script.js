(function iamStrict(){
   "use strict"; // Javascript Strict Method

   $(document).ready(function () {

       /*Logo Slider*/
       $('.logo_carousel').slick({
           dots: false,
           slidesToShow: 5,
           slidesToScroll: 1,
           infinite: true,
           autoplay: false,
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
                       slidesToShow: 2,
                   }
               }
           ]
       });
      
   });
 })();
 