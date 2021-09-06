const hamburger = document.querySelector('.hamburger--js');
const menu = document.querySelector('.menu--js');
const main = document.querySelector('.main--js');

const handleHamburgerClick = () => {
    if(hamburger.classList.contains('hamburger--active')) {
        hamburger.classList.remove('hamburger--active');
    } else {
        hamburger.classList.add('hamburger--active');
    }
}

const handleMenuClick = () => {
    menu.classList.add('menu--animation');
    if(menu.classList.contains('menu--visible')) {
        menu.classList.remove('menu--visible');
    } else {
        menu.classList.add('menu--visible');
    }
}

const handleMainClick = () => {
    if(menu.classList.contains('menu--visible')) {
        menu.classList.remove('menu--visible');
        hamburger.classList.remove('hamburger--active');
    }
}

hamburger.addEventListener('click', handleHamburgerClick);

hamburger.addEventListener('click', handleMenuClick);

main.addEventListener('click', handleMainClick);