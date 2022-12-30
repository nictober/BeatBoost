//бургер меню открытие/скрытие
const burgerOpenBtn = document.querySelector('#burger-open')
const burgerCloseBtn = document.querySelector('#burger-close')
const burgerMenu = document.querySelector('#burger-menu')

burgerOpenBtn.addEventListener("click", (e) => {
    e.preventDefault()
    burgerMenu.classList.toggle('visible')
})
burgerCloseBtn.addEventListener("click", (e) => {
    e.preventDefault()
    burgerMenu.classList.toggle('visible')
})