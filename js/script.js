const menuBtnDOM = document.querySelector('.header-nav .menu');
const menuCloseBtnDOM = document.querySelector('.mobile-menu .close');
const mobileMenuDOM = document.querySelector('.mobile-menu');

menuBtnDOM.addEventListener('click', _ => mobileMenuDOM.classList.toggle('is-open'));
menuCloseBtnDOM.addEventListener('click', _ => mobileMenuDOM.classList.toggle('is-open'));