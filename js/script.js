// Parallax
// About
// $(window).on('load', function () {
//     $('.pKiri').addClass('pMuncul');
//     $('.pKanan').addClass('pMuncul');
// })


// Parallax
$(window).scroll(function () {

    // Jumbotron
    let wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 9 + '%)'
    });

    // About
    if (wScroll > $('#about').offset().top - 250) {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    }


    // Portfolio
    if (wScroll > $('#portfolio').offset().top - 250) {
        $('#portfolio .card').each(function (i) {
            setTimeout(function () {
                $('#portfolio .card').eq(i).addClass('muncul');
            }, 400 * (i + 1));
        });
    }
});
