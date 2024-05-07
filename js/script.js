const elSitenavButton = document.querySelector('.button--x')
const elSiteHeader = document.querySelector('.site-header')

elSitenavButton.addEventListener('click', function() {
  elSiteHeader.classList.toggle('site-header--open')
  if (elSiteHeader.classList.contains('site-header--open')) {
    elSitenavButton.innerHTML = `<img class="icon-burger-close" src="images/icon-close.svg" alt="icon close" width="18" height="18">`
  } else {
    elSitenavButton.innerHTML = `<img class="icon-burger-close" src="images/icon-hamburger.svg" alt="icon close" width="24" height="11">`
  }
})