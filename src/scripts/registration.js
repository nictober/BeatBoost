import {isJWT}  from "./isJWT.js"
console.log(isJWT)
 // извлекаем элемент формы
const formElem = document.getElementById("regForm")
//отправляем объект с данными из формы на сервер
formElem.onsubmit = async (e) => { 
    e.preventDefault()

    const FormData = new FormData(formElem)

    fetch("https://api.beatboost.ru/v1/reg", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "https://api.beatboost.ru"
      },
      body: FormData
    })

    //в случае наличия JWT в куки перебрасываем пользователя на сайт 
    if (isJWT()) {
        alert("Аккаунт зарегистрирован")
        window.location.href = "../../index.html"
    } else {
        alert("Ошибка")
    }
}