//определяем кнопки
const main = document.getElementById('profileMain')
const history = document.getElementById('profileHistory')
const beats = document.getElementById('profileBeats')
const collections = document.getElementById('profileCollections')
const samples = document.getElementById('profileSamples')
const collectionsRelated = document.getElementById('profileCollectionRelated')

//обработчики
main.addEventListener("click", (e) => {
    e.preventDefault()

    makeActive(e.target)
    changeContent('../../pages/TESTprofile.html')
})
history.addEventListener("click", (e) => {
    e.preventDefault()

    makeActive(e.target)
    changeContent('../../pages/TESTprofile-history.html')
})
beats.addEventListener("click", (e) => {
    e.preventDefault()

    makeActive(e.target)
    changeContent('../../pages/TESTbeats.html')
})

//элемент в котором будет заменяться контент
const changingElem = document.getElementById('changingElem')
//запрашиваем части страницы под замену и сразу вставляем в changingElem
function changeContent(contentURL) {
    fetch(contentURL) 
    .then(response => response.text())
    .then(response => {
        changingElem.innerHTML = response
    })
}
//снимаем-ставим класс активного подпункта в профиле
function makeActive(elem) {
    const linksColl = document.querySelectorAll(".profile__navigation-link")
    for(var i=0; i<linksColl.length; i++) {
        linksColl[i].classList.remove("profile__navigation-link_active")
    }
    elem.classList.add("profile__navigation-link_active")
}
