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