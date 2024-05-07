const elSitenavButton = document.querySelector('.button--x')
const elSiteHeader = document.querySelector('.site-header')

elSitenavButton.addEventListener('click', function() {
  elSiteHeader.classList.toggle('site-header--open')
})