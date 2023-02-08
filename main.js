//desktop menu
const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

 navbarEmail.addEventListener('click', function(){
        desktopMenu.classList.toggle('inactive')
 });

 //mobile menu
 const menu = document.querySelector('.menu')
 const mobileMenu = document.querySelector('.mobile-menu')

 menu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive')
 })