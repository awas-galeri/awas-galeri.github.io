// On Load
$(window).on('load', function () {
    setTimeout(() => {
        // Navbar
        $('.navbar').addClass('muncul')
    }, 1000);

    setTimeout(() => {
        // Hero
        $('.hero .content h1').addClass('muncul')
    }, 2000);

    setTimeout(() => {
        $('.hero .content p').addClass('muncul')
    }, 3000);

    setTimeout(() => {
        $('.hero .content .cta').addClass('muncul')
    }, 4000);
})


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


// On Scroll
$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    // About
    if (wScroll > $('#about').offset().top - 150) {
        $('.content').addClass('muncul');
    }

    // Project
    if (wScroll > $('#project').offset().top - 250) {
        $('.project-card').each(function (i) {
            setTimeout(function () {
                $('.project-card').eq(i).addClass('muncul');
            }, 400 * (i + 1));
        });
    }

})