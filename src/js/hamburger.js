const hamburger = document.querySelector('.hamburger--js');
const menu = document.querySelector('.menu--js');

const handleHamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

const handleMenuClick = () => {
    menu.classList.add('menu--animation');
    menu.classList.toggle('menu--visible');
}

hamburger.addEventListener('click', handleHamburgerClick);

hamburger.addEventListener('click', handleMenuClick);