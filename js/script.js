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

// Toggle untuk dropdown tema
const toggle = document.querySelector('#theme');
const dropdown = document.querySelector('.theme-link');

toggle.addEventListener('click', function () {
    dropdown.classList.toggle('muncul');
})


// Ganti tema
function ubah() {
    const body = document.body;
    const nav = document.querySelector('.navbar');
    const about = document.querySelector('.about h2');
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.about .row .content h3');
    const parcontent = document.querySelector('.about .row .content .pKiri');
    const parcontent2 = document.querySelector('.about .row .content .pKanan');
    const project = document.querySelector('.project h2');
    const parproject = document.querySelector('.project p');
    const titproject1 = document.querySelector('.project .row .project-card .project-title1');
    const titproject2 = document.querySelector('.project .row .project-card .project-title2');
    const titproject3 = document.querySelector('.project .row .project-card .project-title3');
    const titproject4 = document.querySelector('.project .row .project-card .project-title4');
    const titproject5 = document.querySelector('.project .row .project-card .project-title5');
    const titproject6 = document.querySelector('.project .row .project-card .project-title6');
    const contact = document.querySelector('.contact h2');
    const parcontact = document.querySelector('.contact p');

    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    about.classList.toggle('dark');
    hero.classList.toggle('dark');
    content.classList.toggle('dark');
    parcontent.classList.toggle('dark');
    parcontent2.classList.toggle('dark');
    project.classList.toggle('dark');
    parproject.classList.toggle('dark');
    titproject1.classList.toggle('dark');
    titproject2.classList.toggle('dark');
    titproject3.classList.toggle('dark');
    titproject4.classList.toggle('dark');
    titproject5.classList.toggle('dark');
    titproject6.classList.toggle('dark');
    contact.classList.toggle('dark');
    parcontact.classList.toggle('dark');
}


// Navbar, toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
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