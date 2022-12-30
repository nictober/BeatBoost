 // извлекаем элемент формы
const formElem = document.getElementById('regForm');
//отправляем объект с данными из формы на сервер
formElem.onsubmit = async (e) => { 
    e.preventDefault();

    let response = await fetch('https://api.beatboost.ru/v1/reg', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    //в случае успеха перебрасываем пользователя на сайт 
    if (result.ok) {
        alert("Аккаунт зарегистрирован"); 
        window.location.href = './login.html'; //на страницу логина
    } else {
        alert("Ошибка"); 
    }
};