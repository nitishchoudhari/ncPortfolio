const hamBurger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamBurger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

