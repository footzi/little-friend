$(document).ready(function(){
    if($(".farm__images_carousel").length) {
        $('.farm__images_carousel').bxSlider({
            auto: true,
            slideWidth: 300,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 50
        });
    };

    $('.header').load('components/header.html');
    $('.nav').load('components/nav.html');
    if($(".issues").length) {
        $('.issues').load('components/issues.html');
    }
    $('.footer').load('components/footer.html');
});