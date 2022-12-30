//кнопка показа/скрытия пароля
const hideButton = document.querySelector('#hider')
const passwordInput = document.querySelector('.form__password-input')

hideButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
})