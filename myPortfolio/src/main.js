const hamBurger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamBurger.addEventListener('click', () => {
    navList.classList.toggle('show');
});