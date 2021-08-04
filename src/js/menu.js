console.log("hello menu.js");

const menu = document.querySelector('.menu--active-js');

const handleClick = () => {
    menu.classList.toggle('menu--active');
}

menu.addEventListener('click', handleClick);