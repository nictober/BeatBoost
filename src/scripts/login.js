// извлекаем элемент формы
const formElem = document.getElementById('loginForm'); 
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
        window.location.href = '../dist/index.html';
    } else {
        alert("пользователь не найден"); 
    }
};
