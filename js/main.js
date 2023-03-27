function selectChange(target) {
    if ($(target).closest('.select').hasClass('focused')) {
        $(target).closest('.select').removeClass('focused');
    } else {
        $(target).closest('.select').addClass('focused');
    }

}
function selectBlur(target) {
    $(target).closest('.select').removeClass('focused');
}
// $(".select select").on("focusin",function(e){

// });
// $(".select select").on("focusout", function (target) {
//     console.log(target.value);
//     $(target.value).closest('.select').removeClass('focused');
// });
$('.header__search-top').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.header__search').toggleClass('active');
});
$(document).mouseup(function (e) {
    var container = $(".header__search");
    if (container.has(e.target).length === 0) {
        container.removeClass('active');
    }
});
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('html, body').css('overflow', 'hidden');
    } else {
        $('html, body').css('overflow', 'visible');
    }
});
$('.menu ul ul').each(function () {
    $(this).closest('li').addClass('with-sub');
});
$('.with-sub>a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').toggleClass('active');
});
$('.card__photos-block').on('click', function () {
    $('.card__photos-block.active').removeClass('active');
    $(this).addClass('active');
    $('.card__img').attr('href', $(this).find('img').attr('src'));
    $('.card__img img').attr('src', $(this).find('img').attr('src'));
});
(function ($) {
    $(function () {

        $('.card-info__tabs').on('click', '.tab:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.card-info').find('.card-info__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function ($) {
    $(function () {

        $('.card-info__hartabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this).closest('.card-info__cont-block').find('.card-info__nav b').html($(this).html());
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.card-info__har').find('.card-info__harblock').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.card-mob > .tab').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.card-mob__block').toggleClass('active');
});
$('.card-mob__tabs > a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.card-info__harblock').toggleClass('active');
});
const swiper = new Swiper('.home-news .swiper', {

    slidesPerView: 3,
    spaceBetween: 14,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.home-news__next',
        prevEl: '.home-news__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 14
        }
    }
});
swiper.on("slideChange afterInit init", function () {
    let currentSlide = this.activeIndex + 1;
    var curr;
    var all;
    if (this.slides.length - 2 < 10) {
        all = '0' + (this.slides.length - 2);
    } else {
        all = this.slides.length - 2;
    }
    if (currentSlide < 10) {
        curr = '0' + currentSlide;
    } else {
        curr = currentSlide;
    }
    $('.home-news .pages__curr').html(curr);
    $('.home-news .pages__all span').html(all);


});
$(document).ready(function () {
    swiper.slideNext();
    swiper.slidePrev();
    swiper2.slideNext();
    swiper2.slidePrev();
    swiper3.slideNext();
    swiper3.slidePrev();
});

const swiper2 = new Swiper('.home-catalog .swiper', {

    slidesPerView: 3,
    spaceBetween: 14,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.home-catalog__next',
        prevEl: '.home-catalog__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 14
        }
    }
});
swiper2.on("slideChange afterInit init", function () {
    let currentSlide = this.activeIndex + 1;
    var curr;
    var all;
    if (this.slides.length - 2 < 10) {
        all = '0' + (this.slides.length - 2);
    } else {
        all = this.slides.length - 2;
    }
    if (currentSlide < 10) {
        curr = '0' + currentSlide;
    } else {
        curr = currentSlide;
    }
    $('.home-catalog .pages__curr').html(curr);
    $('.home-catalog .pages__all span').html(all);


});
const swiper3 = new Swiper('.main .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    }
});
swiper3.on("slideChange afterInit init", function () {
    let currentSlide = this.activeIndex + 1;
    var curr;
    var all;
    if (this.slides.length < 10) {
        all = '0' + (this.slides.length);
    } else {
        all = this.slides.length;
    }
    if (currentSlide < 10) {
        curr = '0' + currentSlide;
    } else {
        curr = currentSlide;
    }
    $('.main .pages__curr').html(curr);
    $('.main .pages__all span').html(all);


});