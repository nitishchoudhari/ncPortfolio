const hamBurger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamBurger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

window.addEventListener('load', function () {
     if(window.innerWidth < 797){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 1.5,
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
}
    else if(window.innerWidth >= 797 && window.innerWidth <= 1024){
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    } else {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    let aboutMeSection = document.getElementById('about-me');
    let aboutMePosition = aboutMeSection.getBoundingClientRect();
    if (aboutMePosition.top >= 0 && aboutMePosition.bottom <= window.innerHeight) {
        document.querySelector('#about-me .info p').classList.add('stack-slide');
    } 
});