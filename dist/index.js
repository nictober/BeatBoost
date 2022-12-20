//убираем анимацию ВСЕХ (т.к. стиль задан глобально) элементов которая по умолчанию вопроизводится до загрузки страницы
window.addEventListener("DOMContentLoaded", (e) => {
    document.body.removeAttribute('id');
})