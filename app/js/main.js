// Работает с POPAP
var myModul = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события
    var _setUpListners = function() {
        // $('.link_prog').bind('click', _showResult);
        // console.log('2');
        //
        // $('.content-bar__option').on('click', _showResult);


        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
           var $this = $(this);
           var id = $this.attr("href");
           var $slick = $(id).find(".slide_prop");
           initSlick($slick);
        })

    };



    $('.single-item').slick({

        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        fade: true,
        dots:true,
        adaptiveHeight:true,
    });

    $('.block_advantage').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        dots:true,


        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                }
            }

        ]
    });
    $('.block_wear_slider').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        dots:true,


        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                }
            }

        ]
    });
function initSlick($slider){
    $slider.slick({

        arrows:true,

        autoplay:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
}








    // Возвращаем объект (публичные методы) 
    return {
        init: init
    };


})();
myModul.init();






$('.slide_prop_1').slick({

    arrows:true,

    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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



$(function() {

    $('.content-bar__select, .content-bar__option').styler();

});
$(".content-bar__select").change(function(){
    $(".block_bar_city").addClass("active");

});
// respWidth = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;
// if ( respWidth && respWidth <= 768 ){
//
//         console.log('221');
//         $('.header_top>.block_phone').appendTo('.header_douwn_block_mobile');
//
//
// }
//


