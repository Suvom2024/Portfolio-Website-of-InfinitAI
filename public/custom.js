(function($) {
    'use strict';
    /*---------------------------------
        Preloader JS
    -----------------------------------*/
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function() {
        var preloader = jQuery('.lds-ripple');
        var preloaderArea = jQuery('.preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header_area").removeClass("sticky");
        } else {
            $(".header_area").addClass("sticky");
        }
    });
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------- 
        Slick slider js
    ------------------------*/
    $('.hero_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.project_button button').on('click', function() {
        $('.project_button button').removeClass('active_btn');
        var filterValues = $(this).data('filter');
        $('.projects_slider_content').slick('slickUnfilter');
        $('.projects_slider_content').slick('slickFilter', filterValues);
        $(this).addClass('active_btn');
    });
    $('.projects_slider_content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.testimonial_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
    });
    /*---------------------- 
        Slick slider js
    ------------------------*/
    /*---------------------- 
        mobile menu js
    ------------------------*/
    $(".menu_icon,.close_btn").on('click', function(e) {
        e.preventDefault();
        $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon,.close_btn").on('click', function(e) {
        e.preventDefault();
        $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'))
    /*---------------------- 
        Isotope js
    ------------------------*/
    $('#project').imagesLoaded(function() {
        var $grid = $('.grid_wrapper').isotope({
            itemSelector: '.single_project',
            layoutMode: 'fitRows'
        })
        $('.project_button_2').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.project_button_2').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    /*---------------------- 
        Isotope js
    ------------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/
    // wow js
    new WOW().init();

    /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
    $(window).on('load', function() {
        $('.portfolio-filter ul li').on('click', function() {
            $('.portfolio-filter ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $workGrid.isotope({
                filter: data
            });
        });

        if (document.getElementById('portfolio')) {
            var $workGrid = $('.portfolio-grid').isotope({
                itemSelector: '.all',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        }
    });

    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            autoplay: false,
            smartSpeed: 2500,
            dots: true
        });
    }

    $('#testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });

    /* Video Popup */
    $(".youtube-link").grtyoutube({
        autoPlay: true,
        theme: "dark"
    });

    /* Counter */
    $('.count-num').rCounter({
        duration: 100
    });


})(window.jQuery);