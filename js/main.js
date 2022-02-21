const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', function (){
    this.classList.toggle('is-active')
    menu.classList.toggle('menu-is-active')
})
