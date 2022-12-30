//открытие-закрытие выпадающего списка в поиске в шапке
let chosenCategoryArea = document.querySelector("#chosen-category") // выбранная категория поиска. "биты" по умолчанию
const categoryList = document.querySelector("#category-list")
const categoryListElements = categoryList.children
const dropdownContainer = document.querySelector("#dropdown-container")

chosenCategoryArea.addEventListener("click", (e) => {
    e.preventDefault()

    console.log('chosenCategoryArea clicked')
    categoryList.classList.toggle('visible')
})

categoryList.addEventListener("click", (e) => {
    e.preventDefault()

    console.log('categoryList clicked')

    let chosenElement = e.target
    let elementToReplace = chosenCategoryArea.children[0]

    if (chosenElement.classList.contains("search-form__category")) {
        elementToReplace.outerHTML = chosenElement.outerHTML

        categoryList.classList.toggle('visible')
    }
})