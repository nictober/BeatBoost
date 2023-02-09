// возвращает куки с указанным name,
// или undefined, если ничего не найдено
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяет наличие jwt среди куки 
export function isJWT() {
    return getCookie("jwt") ? true : false
}
