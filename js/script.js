// Parallax
// About
// $(window).on('load', function () {
//     $('.pKiri').addClass('pMuncul');
//     $('.pKanan').addClass('pMuncul');
// })

// Navbar, toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})


// Parallax
$(window).scroll(function () {

    // Jumbotron
    let wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 9 + '%)'
    });

    // About
    if (wScroll > $('#about').offset().top - 150) {
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