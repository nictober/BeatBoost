import { isJWT, getCookie } from "../src/scripts/isJWT.js"

//проверяем jwt; в случае наличия – отображаем профиль
document.cookie = "jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzM1Mjc2NjYsImlzcyI6ImFwaS5iZWF0Ym9vc3QucnUiLCJuYmYiOjE2NzM1Mjc2NjYsImV4cCI6MTY4Mzg5NTY2NiwidXNlck5hbWUiOiIzIn0.PSkpy41AoaFviS2qyy4cYnq_uTZ4uEvvi4D22nRHv0fCfjgpS0cLTqLqcCgcfeFX02HTqb-6nZmPmahCN1nqaQ"
if (isJWT()) {
    const decodedJWT = getCookie("jwt")
    console.log(decodedJWT)
}
// убираем анимацию ВСЕХ (т.к. стиль задан глобально) элементов которая по умолчанию вопроизводится до загрузки страницы
window.addEventListener("DOMContentLoaded", (e) => {
    document.body.removeAttribute("id");
})