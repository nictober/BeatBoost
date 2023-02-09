import {isJWT}  from "./isJWT.js"
// извлекаем элемент формы
const formElem = document.getElementById("loginForm"); 
//отправляем объект с данными из формы на сервер
formElem.onsubmit = async (e) => { 
    e.preventDefault();
    
    let response = await fetch("https://api.beatboost.ru/v1/auth", {
      method: "POST",
      body: new FormData(formElem)
    })

    //в случае успеха перебрасываем пользователя на сайт 
    if (isJWT()) {
        window.location.href = "../../index.html"
    } else {
        alert("пользователь не найден")
    }
}