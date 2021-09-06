const hamburger = document.querySelector('.hamburger--js');
const menu = document.querySelector('.menu--js');
const main = document.querySelector('.main--js');

const handleHamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

const handleMenuClick = () => {
    menu.classList.add('menu--animation');
    menu.classList.toggle('menu--visible');
}

const handleMainClick = () => {
    menu.classList.remove('menu--visible');
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', handleHamburgerClick);

hamburger.addEventListener('click', handleMenuClick);

main.addEventListener('click', handleMainClick);