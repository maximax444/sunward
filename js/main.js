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