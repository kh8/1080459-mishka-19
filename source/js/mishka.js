var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.main-menu__toggle');
var order_link = document.querySelector('.good__buy-btn');
var orderModal = document.querySelector('.modal');
var orderModalForm = document.querySelector('form');

var toggleNav = function () {
  navMain.classList.toggle('main-menu--closed');
  navMain.classList.toggle('main-menu--opened');
}

navMain.classList.remove('main-menu--nojs');
navMain.classList.toggle('main-menu--closed');
navMain.classList.toggle('main-menu--opened');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-menu--closed');
  navMain.classList.toggle('main-menu--opened');
});

var onOutsideOfModalClick = function () {
  orderModal.classList.remove('modal-show');
  document.removeEventListener('click', onOutsideOfModalClick);
  orderModalForm.removeEventListener('click', onModalClick);
};

var onModalClick = function (evt) {
  evt.stopPropagation();
};

var onOrderLinkClick = function (evt) {
  evt.preventDefault();
  evt.stopPropagation();
  orderModal.classList.add('modal-show');
  document.addEventListener('click', onOutsideOfModalClick);
  orderModalForm.addEventListener('click', onModalClick);
};

if (order_link) {
  order_link.addEventListener('click', onOrderLinkClick);
}
