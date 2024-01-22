<template>
<div class="preloader">
    <div class="loader-ripple">
        <div></div>
        <div></div>
    </div>
</div>
<AppHeader />
   <slot /> 
<AppFooter />
<!-- scroll-top -->
<a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
</template>
<script setup >

    onNuxtReady(async () => {
        (function ($) {
            "use strict";

            // preloader
            $(".preloader").fadeOut("slow");

            
            /**
             * data-background 
             * TODO no se para que es esto
             */
                // $("[data-background]").each(function () {
                //     $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
                // });

                // wow init
                new WOW().init();

                // hero slider
                $('.hero-slider').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 0,
                    autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    items: 1,
                    navText: [
                        "<i class='fal fa-long-arrow-left'></i>",
                        "<i class='fal fa-long-arrow-right'></i>"
                    ],
                });

                $('.hero-slider2').on('change.owl.carousel', function (event) {
                    new WOW().init();
                });

                // multi level dropdown menu
                $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
                    if (!$(this).next().hasClass('show')) {
                        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                    }
                    var $subMenu = $(this).next('.dropdown-menu');
                    $subMenu.toggleClass('show');

                    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass('show');
                    });
                    return false;
                });

        
                
            // scroll to top
            $(window).scroll(function () {

                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    $("#scroll-top").fadeIn('slow');
                } else {
                    $("#scroll-top").fadeOut('slow');
                }
            });

            $("#scroll-top").click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1500);
                return false;
            });

            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass("fixed-top");
                } else {
                    $('.navbar').removeClass("fixed-top");
                }
            });


        })(jQuery);
        // do something with myAnalyticsLibrary
    })

</script>